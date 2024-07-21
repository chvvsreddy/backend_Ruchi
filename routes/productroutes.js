const express = require('express');
const productControllar = require('../controllars/productControllar');

const router = express.Router();

router.post('/add-product/:firmId', productControllar.addProduct);
router.get('/:firmId/products',productControllar.getProductByFirm);
router.delete('/:productId', productControllar.deleteProductById)

router.get('/uploads/:imageName', (req,res) => {
    const imageName = req.params.imageName;
    res.headersSent('Content-Type','image/jpeg');
    res.sendFile(path.join(__dirname,'..','uploads',imageName))

})

module.exports = router;