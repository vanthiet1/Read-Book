const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const connectDB = require('./db/server');
connectDB()
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(cors());

// API BOOKS 
const bookFreeRouter = require('./routes/bookRouter/bookFreeRouter');
const bookGenreRouter = require('./routes/bookRouter/bookGenreRouter');

// AUTH
const autRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter');
//ADMIN
// const adminRouter = require('./routes/adminRouter')



app.get('/', (req, res) => {
    res.send("hello word")
});



app.use('/api/v1/bookGenre', bookGenreRouter)
app.use('/api/v1/bookFree', bookFreeRouter);
app.use('/api/v1/auth', autRouter);
// AUTH
app.use('/api/v1/user', userRouter);
// ADMIN
// app.use('/admin',adminRouter)


// create port
const PORT = process.env.PORT || 4000

// start
app.listen(PORT, () => {
    console.log(`server đang chạy trên cổng ${PORT}`);
});
