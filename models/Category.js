const mongoose = require("mongoose"); //buat variabel awalnya mongoose
const { ObjectId } = mongoose.Schema;

const categorySchema = new mongoose.Schema({ //sesuai sama schema awalnya categorySchema (foldernya liat)
    name : {
        type: String, //ini untuk tipe data yang mau diambil
        required: true //ini untuk validasi
    },
    itemId: [{
        type: ObjectId,
        ref: 'Item'
    }]
})

module.exports = mongoose.model('Category', categorySchema)