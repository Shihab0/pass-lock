

document.getElementById('generate-btn').addEventListener('click', function(){
    const pin = Math.round(Math.random()*10000);
    if(pin < 1000){
        return;
    }
    const pinNumberField = document.getElementById('pin-number');
    pinNumberField.value = pin;
})
