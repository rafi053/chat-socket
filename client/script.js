import io from 'socket.io-client';
const portClient = 'http://localhost:3000';


const socket = io(portClient, {
    withCredentials: false,
    transports: ['websocket'],
});




const chat = document.querySelector('#chat');
const buttonSend = document.querySelector('#button-send');
buttonSend.addEventListener('click', sendMassage)





function sendMassage(e) {
    e.preventDefault();
    const massage = chat.value;
    socket.emit('massage', massage)
      
}



socket.on('massage', (data) => {
    const div = document.createElement('div');
    div.textContent = data;
    chat.appendChild(div);

    if (chat.scrollHeight > chat.clientHeight) {
        chat.scrollTop = chat.scrollHeight - chat.clientHeight;
    }

   
})

