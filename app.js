if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const secret = process.env.SECRET || "fallbacksecret";

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require('connect-mongo').default;
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

const dbUrl = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/Roamly";;

main().then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect(dbUrl);
}

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto:{
        secret:secret,
    },
    touchAfter:24*3600,
});

store.on("error", (err) => {
    console.log("ERROR IN MONGO SESSION STORE!", err);
});

if (process.env.NODE_ENV === "production") {
    app.set("trust proxy", 1);
}

const sessionOptions = {
    store,
    secret:secret,
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires:Date.now() + 24*3600*7*1000,
        maxAge:24*3600*7*1000,
        httpOnly:true,
    }
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next) => {
    console.log("REQ.USER =", req.user);
    console.log("AUTH =", req.isAuthenticated());
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user || null;
    next();
});

app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);

app.all(/.*/, (req,res,next) => {
    next(new ExpressError(404, "Page not found!"));
});

app.use((err,req,res,next) => {
    let {statusCode = 500, message = "Something went wrong!"} = err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs",{err});
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`server is listening to port ${port}`);
});