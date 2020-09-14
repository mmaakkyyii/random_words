function button1Click() {

    let text1=document.getElementById('input1').value;
    document.getElementById('input1').value='';
    console.log(text1);
    if(text1==''){
        return false;
    }else{
        if(window.confirm(text1+" を送信します")){
            AddText(text1);
            $.post("/",'name='+text1);    
        }else{
            return false;
        }
    }
};

function button2Click() {
    clearArray();
};

document.getElementById("modalOpen").addEventListener("click",function(){
    document.getElementById("modal").classList.add("active");
    document.getElementById("mask").classList.add("active");
})
document.getElementById("mask").addEventListener("click",function(){
    document.getElementById("modal").classList.remove("active");
    document.getElementById("mask").classList.remove("active");
})
