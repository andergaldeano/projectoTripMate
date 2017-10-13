const path = require('path');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);
const mongoose = require('mongoose');
const dbUrl = process.env.dbURL;

  console.time('db');

mongoose.connect(dbUrl)
   .then( () => {
     console.log(`Connected to ${dbUrl}`);
     console.timeEnd('db');
   })
   .catch( e => console.log(e));
