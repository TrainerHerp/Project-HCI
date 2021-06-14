/* Characters */

// var modalBtn = document.querySelector('.modal-btn');
// var modalBg = document.querySelector('.modal-bg');

// modalBtn.addEventListener('click', function(){
//     modalBg.classList.add('bg-active');
// });

// window.onclick = function(event) {
//     if (event.target == modalBg) {
//         modalBg.classList.remove('bg-active');
//     }
// }

var lightBtn = document.getElementById("light_button");
var darkBtn = document.getElementById("dark_button");
var lightDiv = document.getElementById("light");
var darkDiv = document.getElementById("dark");

darkBtn.onclick = function(){
    darkDiv.classList.remove('char_inactive');
    darkDiv.classList.add('char_active');
    lightDiv.classList.remove('char_active');
    lightDiv.classList.add('char_inactive');
    document.getElementById("characters_body").style.backgroundImage = "url('../assets/dark-background.jpg')";
    
};

lightBtn.onclick = function(){
    lightDiv.classList.remove('char_inactive');
    lightDiv.classList.add('char_active');
    darkDiv.classList.remove('char_active');
    darkDiv.classList.add('char_inactive');
    document.getElementById("characters_body").style.backgroundImage = "url('../assets/light-background.jpg')";
};

/* Characters End */