var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('customer/login');
});


/* GET resign page. */
router.get('/register', function(req, res, next) {
    res.render('customer/register');
  });
  /* GET  about page. */
router.get('/about', function(req, res, next) {
    res.render('customer/about');
  });
 /* GET  shipping page. */
 router.get('/shipping', function(req, res, next) {
    res.render('customer/shipping');
  });

  /* GET  Order history page. */
 router.get('/wishlist', function(req, res, next) {
    res.render('customer/wishlist');
  });

  /* GET  contact page. */
 router.get('/contact', function(req, res, next) {
    res.render('customer/contact');
  });

  /* GET  contact page. */
 router.get('/codes', function(req, res, next) {
    res.render('customer/codes');
  });

   /* GET  kitchen page. */
 router.get('/kitchen', function(req, res, next) {
    res.render('customer/kitchen');
  });

  /* GET  care page. */
 router.get('/care', function(req, res, next) {
    res.render('customer/care');
  });

  
  /* GET  hold page. */
 router.get('/hold', function(req, res, next) {
    res.render('customer/hold');
  });

   /* GET term and condition  page. */
 router.get('/term', function(req, res, next) {
    res.render('customer/term');
  });

   /* GET faqs  page. */
 router.get('/faqs', function(req, res, next) {
    res.render('customer/faqs');
  });
  /* GET online shipping. */
router.get('/offer', function(req, res, next) {
    res.render('customer/offer');
  });
  
   /* GET popular categories. */
router.get('/single', function(req, res, next) {
    res.render('customer/single');
  });

  /* GET forgot password. */
router.get('/forgotPW', function(req, res, next) {
    res.render('customer/forgotPW');
  });

  router.get('/account', function(req, res, next) {
    res.render('customer/account');
  });
module.exports = router;
