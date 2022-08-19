const pinNumberField = document.getElementById('pin-number');
const typedPinNumberField = document.getElementById('typed-pin')

document.getElementById('submit-btn').addEventListener('click', function(){
   const  pinNumber = pinNumberField.value;
    const typedPinNumber = typedPinNumberField.value;
    const success =  document.getElementById('success');
    const failed = document.getElementById('failed');
    const actionLeft = document.getElementById('action-left');


    
    if(pinNumber === ''){
        failed.style.display = 'block'
        success.style.display = 'none'
    }
    else if(pinNumber === typedPinNumber){
        success.style.display = 'block'
        failed.style.display = 'none'
    }
    else{
        failed.style.display = 'block'
        success.style.display = 'none'
    }
})

