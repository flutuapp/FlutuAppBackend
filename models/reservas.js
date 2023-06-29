const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_HOST);

var Schema = mongoose.Schema;

var Reserva = new Schema ({

    acompanhantes: { type:Number, required: true},
    data        : { type:Date,  required: true},            
    horainicial : { type:Number,  required: true},
    horafinal   : { type:Number,  required: true},    
    valor       : { type:Number},
      
})

const ReservaModel = mongoose.model('reservas_colls', Reserva);


module.exports = {ReservaModel}