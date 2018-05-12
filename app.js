const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./db/db');
const students = require('./routes/students');
const tests = require('./routes/tests');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev')); // Helps us know what's going on in our app error-wise. Returns errors in terminal

app.use('/students', students);
app.use('/tests', tests);

app.use((err, req, res, next) => { // Error-handler has 4 argumnets. Absolute last error handler.
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const init = async () => {

  if (require.main === module){
    //will only run when run with npm start and not with npm test to avoid db syncing in multiple threads when running tests
    try {
      await db.sync();
      app.listen(3000, () => {
        console.log('Server is listening on port 3000!');
      })
    } catch (err) {
      console.error(err);
    }
  }

}

init();

module.exports = app;
