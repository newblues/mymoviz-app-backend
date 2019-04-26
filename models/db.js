const mongoose = require('mongoose');

/* ----- Your DB ------ */
const dbUrl = 'mongodb://master:master123@ds155663.mlab.com:55663/mymovizapp';
/* --------------------- */

/* ----- DB Options ------ */
const options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
};

mongoose.connect(dbUrl, options, error => {
  if (error) {
    console.error(error);
  } else {
    console.log('Your database is operational...');
  }
});

module.exports = {
  mongoose: mongoose
};
