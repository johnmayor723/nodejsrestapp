var express= require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs" )

 var campgrounds = [
        { name: "salmon creek", image:"https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
         { name: "goat rest mountain", image:"https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
         { name: "ice capped mountain", image:"https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
]


app.get("/", function( req, res){
    res.render("landing.ejs");
})

app.get("/campgrounds", function(req, res){
   

 res.render("campgrounds", {campgrounds: campgrounds})
})
 app.get("/campgrounds/new", function(req, res){
     res.render("new")
 })
app.post("/campgrounds", function(req, res){
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name:name, image:image}
   campgrounds.push(newCampground);
   res.redirect("/campgrounds")
})
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started")
})