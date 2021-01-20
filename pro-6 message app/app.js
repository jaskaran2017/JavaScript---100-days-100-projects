console.log("project 6");

const submit = document.getElementById('submit');

submit.addEventListener('click',(e)=>{
    let newMessage = document.getElementById('messageTxt');
    let message = localStorage.getItem('message');
    if (message == null){
        messageObj = [];
    }else {
        messageObj = JSON.parse(message);
    }
    
    messageObj.push(newMessage.value);
    localStorage.setItem('message',JSON.stringify(messageObj));
    newMessage.value = "";
    showMessage()
})
 
function showMessage(){
    let message = localStorage.getItem('message');
    if (message==null){
        messageObj = [];
    }else {
        messageObj =JSON.parse(message);
    }
    // let newMessage = document.getElementById('messageTxt');
    let newTxt = '';
    messageObj.forEach(element => {
        newTxt += `<p class ="text">${element}</p>`
    });
    let newMessageEl = document.getElementById("lastTxt")
    if(messageObj.length != 0){
        newMessageEl.innerHTML = newTxt;
    }
}
