const font_family_list = ["sans-serif","serif","cursive","fantasy","monospace"];
var text_array = new Array();


$(document).ready(() => {
    FitCanvas();
});

var t_for_GB_Gradation=0;
function SetBG(){

    let w=$( window ).width();
    let h=$( window ).height();
    let t = t_for_GB_Gradation;
    let canvas = document.getElementById('main_cnavas');
    let rectangle = canvas.getContext('2d');
    rectangle.beginPath();
    let rectangle_color= rectangle.createLinearGradient(0, 0, w, h);
    let color1= 'rgb('+Math.floor(25*Math.sin(t+2*t)+220)+','+Math.floor(25*Math.sin(t+3*t+1)+220)+','+Math.floor(25*Math.sin(t+3*t*2)+220)+')';
    let color2= 'rgb('+Math.floor(25*Math.sin(t+1.2*t+1)+220)+','+Math.floor(25*Math.sin(t+0.6*t)+220)+','+Math.floor(25*Math.sin(0.8*t+2*t*2+3)+220)+')';
    rectangle_color.addColorStop(0.0, color1);
    rectangle_color.addColorStop(1.0, color2);
    rectangle.fillStyle = rectangle_color;
    rectangle.fillRect(0, 0, w, h);
    t_for_GB_Gradation+=0.005;    
}

function FitCanvas(){
    let canvas = document.getElementById('main_cnavas');
    let w=$( window ).width();
    let h=$( window ).height();
    canvas.width=w*1;
    canvas.height=h*1;

    SetBG();
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

document.getElementById("modalOpen").addEventListener("click",function(){
    document.getElementById("modal").classList.add("active");
    document.getElementById("mask").classList.add("active");
})
document.getElementById("mask").addEventListener("click",function(){
    document.getElementById("modal").classList.remove("active");
    document.getElementById("mask").classList.remove("active");
})

$(window).resize(FitCanvas)


function AddText(text){
    if(text_array.length>200)return;
    var w = $( window ).width();
    var h = $( window ).height();
    px=20+Math.floor(Math.random()*80);
    let a=Math.floor(Math.random()*5);
    font_name="px "+font_family_list[1];
    var x=w*Math.random();
    var y=h+100;

    text_array.push([text,px,font_name,x,y]);
    //console.log(text_array.length);

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
        text_array[i][4]=text_array[i][4]-text_array[i][1]*0.03;
        if(text_array[i][4]>-100){
            context.fillText(text_array[i][0],text_array[i][3],text_array[i][4]);
        }else{
            text_array.splice(i,1);
        }
    }
    //console.log(text_array);

}

setInterval(()=>{Render();},30);
setInterval(()=>{AddText(GenerateWord());},700);

