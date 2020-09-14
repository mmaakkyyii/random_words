const express = require('express');
const fs =require('fs');
const DB =require('./data_access.js');
let aa=[]
let a=function(i){make_DB_json(i)};
//DB.PutWord2DB("もぁぱちちゃん");
//DB.GetDB(a);
console.log(aa);

const app = express();
// パス指定用モジュール
const path = require('path');
const { table } = require('console');


// 8080番ポートで待ちうける
app.listen(process.env.PORT ||8080, () => {
  console.log('Running at Port 8080...');
});

app.get('/',(req,res)=>{
  console.log('accsess!');
  DB.GetDB(a);

  res.sendFile(__dirname + '/public/index.html');
});

// 静的ファイルのルーティング
app.use(express.static(path.join(__dirname, 'public')));

// その他のリクエストに対する404エラー
app.use((req, res) => {
  res.sendStatus(404);
});


function make_DB_json(i){
  console.log(i.rows);
  let data={
    words:[]
  };
  for (let row of i.rows) {
    console.log(row);
    data.words.push(row);
  }
  fs.writeFile('./public/DB.json',JSON.stringify(data,'',' '),(err)=>{if(err)console.log('${err}')});

}