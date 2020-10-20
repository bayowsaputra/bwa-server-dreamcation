const router = require('express').Router(); //buat method si router untuk expressnya terlebih dahulu untuk import si express nya
const adminController = require('../controllers/adminController');
const { uploadSingle, uploadMultiple } = require('../middlewares/multer'); //sesuai dengan router dari item & bank
const auth = require ('../middlewares/auth'); // manggil variabiel dari file auth.js 

router.get('/signin', adminController.viewSignin);
router.post('/signin', adminController.actionSignin);
router.use(auth);
router.get('/logout', adminController.actionLogout);
router.get('/dashboard', adminController.viewDashboard); //untuk dapetin si folder dashboard & manggil method viewdashboardnya

// endpoint category
router.get('/category', adminController.viewCategory); //untuk dapetin si folder category & manggil method viewcategorynya
router.post('/category', adminController.addCategory); //untuk dapetin function yang udah dibuat di adminController.js
router.put('/category', adminController.editCategory);
router.delete('/category/:id', adminController.deleteCategory);
// endpoint bank
router.get('/bank', adminController.viewBank); //untuk dapetin si folder bank & manggil method viewbank
router.post('/bank', uploadSingle, adminController.addBank);
router.put('/bank', uploadSingle, adminController.editBank);
router.delete('/bank/:id', adminController.deleteBank);
// endpoint item
router.get('/item', adminController.viewItem);//untuk dapetin si folder item & manggil method viewItem
router.post('/item', uploadMultiple, adminController.addItem);
router.get('/item/show-image/:id', adminController.showImageItem);
router.get('/item/:id', adminController.showEditItem); //id nya ini untuk narik datanya
router.put('/item/:id', uploadMultiple, adminController.editItem);
router.delete('/item/:id/delete', adminController.deleteItem);

// endpoint detail item
router.get('/item/show-detail-item/:itemId', adminController.viewDetailItem);
router.post('/item/add/feature', uploadSingle, adminController.addFeature);
router.put('/item/update/feature', uploadSingle, adminController.editFeature);
router.delete('/item/:itemId/feature/:id', adminController.deleteFeature);

router.post('/item/add/activity', uploadSingle, adminController.addActivity);
router.put('/item/update/activity', uploadSingle, adminController.editActivity);
router.delete('/item/:itemId/activity/:id', adminController.deleteActivity);
// endpoint booking
router.get('/booking', adminController.viewBooking);//untuk dapetin si folder booking & manggil method viewBookign
router.get('/booking/:id', adminController.showDetailBooking); //manggil yang ada di admincontroller.js
router.put('/booking/:id/confirmation', adminController.actionConfirmation);
router.put('/booking/:id/reject', adminController.actionReject);
module.exports = router;