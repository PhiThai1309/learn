let name = document.getElementById('name');
    let btnSay = document.getElementById('btnSay');
    let message = document.getElementById('message');
    document.getElementById('btnSay').addEventListener('click', function(){
        let name = document.getElementById('name').value;
        message.innerHTML = `Hello ${name.value}`;
    });