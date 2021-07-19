const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(express.static("Assets"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (req,res) {
    res.render("Login");
})
app.get("/login",function (req,res) {
    res.render("Login");
})
app.get("/register",function (req,res) {
    res.render("SignUp");
})
app.get("/home",function (req,res) {
    res.render("home");
})
app.get("/messages",function (req,res) {
    res.render("messages");
})
app.get("/notificatoins",function (req,res) {
    res.render("notificatoins");
})
app.get("/account",function (req,res) {
    res.render("account");
})
app.listen(3000,function () {
    console.log("The server has been started at port 3000.");
})
