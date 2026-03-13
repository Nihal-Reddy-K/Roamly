const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;

const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req,res) =>{
    let { category, search } = req.query;
    // let allListings;
    // if(category){
    //     allListings = await Listing.find({ category });
    // }else{
    //     allListings = await Listing.find({});
    // }
    let query = {};
    if(category){
        query.category = category;
    }
    if(search){
        query.$or = [
            { title: { $regex: search, $options: "i" } },
            { location: { $regex: search, $options: "i" } },
            { country: { $regex: search, $options: "i" } }
        ];
    }
    const allListings = await Listing.find(query);
    
    res.render("listings/index.ejs",{allListings, category, search});
};

module.exports.new = (req,res)=>{
    res.render("listings/new.ejs");
};

module.exports.show = async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id)
        .populate("owner")
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        });
    
    if(!listing){
        req.flash("error", "The listing you requested does not exist!");
        return res.redirect("/listings");
    }
    
    let avgRating = 0;
    let reviewCount = listing.reviews.length;
    if(reviewCount > 0){
        let totalRating = listing.reviews.reduce((sum, review) => sum + review.rating, 0);
        avgRating = totalRating / reviewCount;
    }

    res.render("listings/show.ejs", { listing, avgRating, reviewCount });
};

module.exports.create = async (req,res,next) => {
    // let {title,description,image,price,country,location} = req.body; OR do it in a simpler way

    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    })
    .send();
    
    let url = req.file.path;
    let filename = req.file.filename;
    // console.log(url, ".." ,filename);
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    newListing.geometry = response.body.features[0].geometry;
    let savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success","New listing was created!");
    res.redirect("/listings");
};

module.exports.edit = async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","The listing does not exist!");
        return res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;

    if (originalImageUrl.includes("/upload")){
        originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");
    }

    res.render("listings/edit.ejs",{listing, originalImageUrl});
};

module.exports.update = async (req,res) => {
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});

    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
        await listing.save();

    }

    req.flash("success","Updation was successful!");
    res.redirect(`/listings/${id}`);
};

module.exports.delete = async (req,res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing has been deleted!");
    res.redirect("/listings");
};