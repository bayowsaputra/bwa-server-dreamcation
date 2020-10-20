const mongoose = require("mongoose"); //buat variabel awalnya mongoose

const memberSchema = new mongoose.Schema({ //sesuai sama schema awalnya imageSchema
    firstName : {
        type: String, //ini untuk tipe data yang mau diambil
        required: true //ini untuk validasi
    },
    lastName : {
        type: String, //ini untuk tipe data yang mau diambil
        required: true //ini untuk validasi
    },
    email : {
        type: String, //ini untuk tipe data yang mau diambil
        required: true //ini untuk validasi
    },
    phoneNumber : {
        type: String, //ini untuk tipe data yang mau diambil
        required: true //ini untuk validasi
    }
})

module.exports = mongoose.model('Member', memberSchema)