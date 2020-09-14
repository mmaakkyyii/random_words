function button1Click() {
    let text1=document.getElementById('input1').value;
    AddText(text1);
    console.log(text1);
    $.post("/",'name='+text1);
    //PutWord2DB(text1);
    return false;
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
