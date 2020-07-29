const path = require("path");

const express = require("express");
const { render } = require("pug");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  //res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  res.render("add-product");
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  console.log(
    "redirrecting to /(shop page) via same url(admin/add-product)but with post req"
  ); //when we r requesting admin/add-product it's get req,bt when submitting the form it's hit the same url but with post req.
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
