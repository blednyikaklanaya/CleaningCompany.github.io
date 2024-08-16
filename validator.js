let inp = document.querySelector("#tell");
let btn = document.getElementById("sendBtn");


let infoSuccessfully = document.getElementById("successfully");


let inputName = document.querySelector("#Name");


let needrefresh = false;


btn.addEventListener("mouseover", _ => {
   if ( (((inp.value).length) != 13) && (btn.disabled != true) ) {
    btn.disabled = true;
    inp.value = "Це обов'язкове поле!";
   } else if ( (((inp.value).length) == 13) && (needrefresh == false) ) {
    btn.disabled = false;
   }

   if ( ((inputName.value).length) == 0 ) {
       inputName.value = "Це обов'язкове поле!"; 
   }
});


inp.addEventListener("focus", _ => {
    if(!/^\+\d*$/.test(inp.value))
        inp.value = "+380";
}); 

inp.addEventListener('keypress', e => {
    if(!/\d/.test(e.key))
      e.preventDefault();
});

inputName.addEventListener("focus", _ => {
    if (true)
        inputName.value = "";
});


var form = document.getElementById('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    var body = new FormData(form);

    fetch('sender.php', {
        method: 'POST',
        body: body
    }).then((response) => {
        btn.disabled = true;
        needrefresh = true;
        infoSuccessfully.style.display = "block";
    }).catch((error) => {
        // Завершился ошибкой
    }); //Утилита для отправки формы без редерикта на другую страницу.
});