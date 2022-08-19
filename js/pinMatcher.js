document.getElementById('pin-btn').addEventListener('click', function(event){
    const pinBtnNumber = event.target.innerText;
    const pinDisplay = document.getElementById('typed-pin');
    const previousTyped = pinDisplay.value;

    if(isNaN(pinBtnNumber)){
        if(pinBtnNumber === 'C'){
           pinDisplay.value = '';
        }
        else if(pinBtnNumber === '<'){
            const disits = previousTyped.split('');
            disits.pop();
            const remainingDisits = disits.join('');
            pinDisplay.value = remainingDisits;

        }
    } 
    else{
        const newTyped = previousTyped + pinBtnNumber;
        pinDisplay.value = newTyped;
    }
})