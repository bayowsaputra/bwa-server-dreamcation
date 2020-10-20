const mongoose = require("mongoose"); //buat variabel awalnya mongoose
const { ObjectId } = mongoose.Schema;

const bookingSchema = new mongoose.Schema({ //sesuai sama schema awalnya bookingSchema
    bookingStartDate : {
        type: Date, //ini untuk tipe data yang mau diambil
        required: true //ini untuk validasi
    },
    bookingEndDate : {
        type: Date,
        required: true
    },
    invoice : {
        type: String,
        required: true
    },
    itemId : {
      _id: {
        type: ObjectId,
        ref: 'Item',
        required: true
      },
      price : {
          type : Number,
          required: true
      },
      title : {
        type : String,
        required: true
    },
      duration : {
        type : Number,
        required: true
      }
    },
    total : {
        type : Number,
        required: true
      },
    memberId : {
        type: ObjectId,
        ref: 'Member'
    },
    bankId : {
        type: ObjectId,
        ref: 'Bank'
    },
    payments : {
        proofPayment : {
            type : String,
            required : true
    },
    bankFrom : {
        type : String,
        required : true
    },
    accountHolder : {
        type : String,
        required : true
    },
    status : {
        type : String,
        default : 'Proses'
    }
  }
})

module.exports = mongoose.model('Booking', bookingSchema)