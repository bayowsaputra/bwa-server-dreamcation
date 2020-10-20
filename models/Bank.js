const mongoose = require("mongoose"); //buat variabel awalnya mongoose

const bankSchema = new mongoose.Schema({ //sesuai sama schema awalnya imageSchema
    nameBank : {
        type: String, //ini untuk tipe data yang mau diambil
        required: true //ini untuk validasi
    },
    nomorRekening : {
        type: String, //ini untuk tipe data yang mau diambil
        required: true //ini untuk validasi
    },
    name : {
        type: String, //ini untuk tipe data yang mau diambil
        required: true //ini untuk validasi
    },
    imageUrl :{ 
        type: String,
        required: true

    }
})

module.exports = mongoose.model('Bank', bankSchema)