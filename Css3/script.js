var inputs = document.getElementsByClassName('formulary__input');  //Obtaining all the element and put it in the variable input.
for (var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){ //Keyup is an event when I stop pushing a key
        if(this.value.length>=1) {                          //If this element has at least one character, then the class "pin" is added. 
            this.nextElementSibling.classList.add('pin');
        } else {
            this.nextElementSibling.classList.remove('pin');
        }
    });
}