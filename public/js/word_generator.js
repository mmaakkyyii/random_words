var word_list=[];
//var word_list=["もぁぱち","空想部","ゆきたん","ひよたん","空想","魂","無限","あんどもあ","空想力","ぱちぱち","羊","クーピー","アルパカ","ヌートリア","ナマコ","クレオン","屋上","輪廻","深淵","舞踏会","キセキ","晩餐","しゅき","わくわく","人生","ねーね","マジック","ゴーン","ナイト","チャーハン","100杯","食べたい","顧問","アーモンドアイ","エゴサ"];
var word_list2=["の","の","の","に","と","","","",""];

$.getJSON('DB.json',(data)=>{
    console.log(data);
    for(w of data.words){
        console.log(w['word']);
        word_list.push(w['word'])
    }

})
function GenerateWord(){
    let i1=Math.floor(Math.random()*word_list.length);
    let i2=Math.floor(Math.random()*word_list.length);
    let i3=Math.floor(Math.random()*word_list2.length);
    return word_list[i1]+word_list2[i3]+word_list[i2];

}