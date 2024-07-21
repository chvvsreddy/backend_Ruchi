const express= require ('express');
const firmControllar = require('../controllars/firmControllar');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router()
router.post('/add-firm', verifyToken, firmControllar.addFirm);
router.delete('/:firmId', firmControllar.deleteFirmById);

router.get('/uploads/:imageName', (req,res) => {
    const imageName = req.params.imageName;
    res.headersSent('Content-Type','image/jpeg');
    res.sendFile(path.join(__dirname,'..','uploads',imageName))

})

module.exports = router;