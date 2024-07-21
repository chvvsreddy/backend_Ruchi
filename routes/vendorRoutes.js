
const express = require('express');
const vendorControllar = require('../controllars/vendorControllar');

const router = express.Router();

router.post('/register', vendorControllar.vendorRegister);
router.post('/login', vendorControllar.vendorLogin);

router.get('/all-vendors', vendorControllar.getAllVendors);
router.get('/single-vendor/:id', vendorControllar.getVendorById)

module.exports = router;