const mongoose = require('mongoose');

const databaseString = 'mongodb://localhost:27017/ispit';
mongoose.connect(databaseString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
  
mongoose.connection.once('open', function () {
    console.log('Uspesno povezivanje!');
});
  
mongoose.connection.on('error', (error) => {
    console.log('Greska: ', error);
});

var goalsSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId
    },
    naziv: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    opis: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    vaznost: {
        type: mongoose.Schema.Types.Number,
        required: true
    }
},
{ collection: 'goals' }
);

var stepsSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId
    },
    cilj: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Goals'
    },
    opis: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    redniBroj: {
        type: mongoose.Schema.Types.Number,
        required: true
    }
},
{ collection: 'steps' }
);

var Goals = mongoose.model('Goals', goalsSchema);
var Steps = mongoose.model('Steps', stepsSchema);

module.exports = {
    Goals,
    Steps
}