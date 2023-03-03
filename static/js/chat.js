function sendAsk() {
    ctext = document.getElementById('chat-text').value;
    if(ctext == ""){
        document.getElementById("chat-text").focus();
        return false;
    }
    alert("!");
    addtext = "<div style='margin:30px 0; text-align:right';><span style='background-color: var(--first-color); padding:10px 18px; border-radius: 20px 20px 20px 20px; color: #FFF; font-size: var(--h2-font-size)'>"+ctext+"</span></div>";
    document.getElementById("chat-box").innerHTML += addtext;

    bottext = "<div style='margin:30px 0; text-align:left';><span style='background-color: var(--first-color); padding:10px 18px; border-radius: 20px 20px 20px 20px; color: #FFF; font-size: var(--h2-font-size)'>"+ctext+"</span></div>";
    document.getElementById("chat-box").innerHTML += bottext;
    
    document.getElementById('chat-text').value = "";

    var mydiv = document.getElementById("chat-box");
    mydiv.scrollTop = mydiv.scrollHeight;
}

// document.getElementById('chat-text').addEventListener('keydown',function(event){
//     if(event.keyCode ==13){
//         // event.preventDefault();
//         sendAsk();
//     }
// });