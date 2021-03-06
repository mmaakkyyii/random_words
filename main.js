const express = require('express');
const fs =require('fs');
const DB =require('./data_access.js');


let a=function(i){make_DB_json(i)};
//DB.PutWord2DB("ぱちぱち");
//DB.GetDB(a);

const app = express();
// パス指定用モジュール
const path = require('path');
const { table } = require('console');


// 8080番ポートで待ちうける
app.listen(process.env.PORT ||8080, () => {
  console.log('Running at Port 8080...');
});


app.get('/',(req,res)=>{
  console.log('get!');
  DB.GetDB(a);

  res.sendFile(__dirname + '/public/index.html');
});
// 静的ファイルのルーティング
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true })) ;

app.post('/',(req,res,next)=>{
  console.log('post');
  res.setHeader('Content-Type', 'text/plain');
  let new_word=req.body['name'];
  console.log(new_word);
  DB.PutWord2DB(new_word);
  res.sendFile(__dirname + '/public/index.html');
  
})


// その他のリクエストに対する404エラー
app.use((req, res) => {
  res.sendStatus(404);
});


function make_DB_json(i){
  console.log("make_DB");
  let data={
    words:[]
  };
  for (let row of i.rows) {
    //console.log(row);
    data.words.push(row);
  }
  fs.writeFile('./public/DB.json',JSON.stringify(data,'',' '),(err)=>{if(err)console.log('${err}')});

}