const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();

mongoose.connect(process.env.DB_CONNECT,{ useUnifiedTopology: true },
()=>{
    console.log('connected to DB')
}
);