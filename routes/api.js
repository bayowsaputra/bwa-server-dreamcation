const router = require('express').Router(); //buat method si router untuk expressnya terlebih dahulu untuk import si express nya
const apiController = require('../controllers/apiController');
const { uploadSingle } = require('../middlewares/multer'); 

router.get('/landing-page', apiController.landingPage);
router.get('/detail-page/:id', apiController.detailPage); //kenapa butuh id nya? karena harus dipanggil berdasarkan id yang dipanggil di apiController.js
router.post('/booking-page', uploadSingle, apiController.bookingPage);

module.exports = router;