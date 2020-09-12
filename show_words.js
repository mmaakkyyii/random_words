$(document).ready(() => {
    FitCanvas();
});

var t=0;

function FitCanvas(){
    var canvas = document.getElementById('main_cnavas');
    //console.log(canvas);
    let w=$( window ).width();
    let h=$( window ).height();
    canvas.width=w*1;
    canvas.height=h*1;

    var rectangle = canvas.getContext('2d');

    rectangle.beginPath();
    var rectangle_color= rectangle.createLinearGradient(0, 0, w, h);
    var color1= 'rgb('+Math.floor(25*Math.sin(t+2*t)+220)+','+Math.floor(25*Math.sin(t+3*t+1)+220)+','+Math.floor(25*Math.sin(t+3*t*2)+220)+')';
    var color2= 'rgb('+Math.floor(25*Math.sin(t+1.2*t+1)+220)+','+Math.floor(25*Math.sin(t+0.6*t)+220)+','+Math.floor(25*Math.sin(0.8*t+2*t*2+3)+220)+')';
    rectangle_color.addColorStop(0.0, color1);
    rectangle_color.addColorStop(1.0, color2);
    rectangle.fillStyle = rectangle_color;
    rectangle.fillRect(0, 0, w, h);
    t+=0.005;
    
}

function button1Click() {
    let text1=document.getElementById('input1').value;
    AddText(text1);
    return false;
};
function button2Click() {
    clearArray();
};
function clearArray(){
    text_array.length=0;
}

$(window).resize(FitCanvas)

var font_family_list = ["sans-serif","serif","cursive","fantasy","monospace"];
var text_array = new Array();

function AddText(text){
    //console.log(text);
    var w = $( window ).width();
    var h = $( window ).height();
    px=20+Math.floor(Math.random()*80);
    let a=Math.floor(Math.random()*5);
    //console.log(a);
    font_name="px "+font_family_list[1];
    var x=w*Math.random();
    var y=-100;

    text_array.push([text,px,font_name,x,y]);
    //console.log(text_array);
    Render();

}


function Render(){
    var canvas = document.getElementById('main_cnavas');
    var context = canvas.getContext('2d');
    var h = $( window ).height();

    FitCanvas();
    let out_text=new Array();
    for(let i=text_array.length-1;i>=0;i--){
        context.font=text_array[i][1]+text_array[i][2];
        context.textAlign = 'center'; 
        context.fillStyle='black';
        text_array[i][4]=text_array[i][4]+text_array[i][1]*0.03;
        if(text_array[i][4]<h+100){
            //console.log(text_array[i][3]);
            context.fillText(text_array[i][0],text_array[i][3],text_array[i][4]);
        }else{
            text_array.splice(i,1);
        }
    }
    //console.log(text_array);

}

function ChangeBG(){
}
setInterval(()=>{Render();},30);
setInterval(()=>{AddText(document.getElementById('input1').value);},500);
setInterval(()=>{ChangeBG();},1000);

