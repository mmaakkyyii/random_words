require('dotenv').config();

const {Client} = require('pg');

exports.GetDB= function (callback){
  const client= new Client({
    //pachipachi-word-generator
    host: process.env.ENV_HOST,
    database: process.env.ENV_DB,
    port: 5432,
    user: process.env.ENV_USER,
    password: process.env.ENV_PASSWORD,
    ssl: { rejectUnauthorized: false }
  });
  client.connect(err => {
    if (err) {
      console.error('connection error', err.stack);
    } else {
      console.log('connected in GetDB');
    }
  })

  let quer="SELECT * FROM words;";
  client.query(quer, (err, res) => {
    if (err) throw err;
     for (let row of res.rows) {
       //console.log(JSON.stringify(row));
     }
     client.end();
     callback(res);
   });

  //console.log(query);
  //return query;

}

exports.PutWord2DB = function(text){
  const client= new Client({
    //pachipachi-word-generator
    host: process.env.ENV_HOST,
    database: process.env.ENV_DB,
    port: 5432,
    user: process.env.ENV_USER,
    password: process.env.ENV_PASSWORD,
    ssl: { rejectUnauthorized: false }
  });
  client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected in Put2Wird2DB')
    }
  })

  
  let quer="INSERT INTO words(word) VALUES('"+text+"');";
  client.query(quer, (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  });

}