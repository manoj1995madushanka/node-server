const express = require('express');
const app = express();


// import routs
const authRoute = require('./router/auth')

// route middleware
app.use('/api/user',authRoute)

app.listen(3000,()=>console.log('server started.'))