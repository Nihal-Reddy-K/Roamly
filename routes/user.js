const express = require("express");
const router = express.Router({mergeParams: true});
const User = require("../models/user.js");
const passport = require("passport");
const { savedRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");

//signup
router
.route("/signup")
.get(userController.getsignup)
.post(userController.postsignup);

//login
router
.route("/login")
.get(userController.getlogin)
.post(savedRedirectUrl,passport.authenticate("local",{failureRedirect: '/login', failureFlash: true}),userController.postlogin);

router.get("/logout",userController.logout);

module.exports = router;
