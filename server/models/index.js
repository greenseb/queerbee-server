'use strict';
const mongoose = require('mongoose');

mongoose
  .connect(`${DB_URL}${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database is connected!📍');
  })
  .catch((e) => console.log(e));
