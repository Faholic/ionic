const express = require('express');
const cors = require('cors');
const app = express();

var corsOptions = {
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req, res) => {
    res.json({ message: 'Welcome to Suchawadee application' });
});

// enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

require('./app/routes/parking.routes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});