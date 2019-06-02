
var trenutna;

document.querySelector('.overlay .close').onclick = function() {
   document.querySelector('.overlay').style.display = 'none';
}

var slike = document.querySelectorAll('.gallery img');

for (i=0; i<slike.length; i++) {
    slike[i].addEventListener('click', function (){

        
        trenutna = this.dataset.no;
        var putanja = 'img/' + trenutna + '.jpeg'

        document.querySelector('.overlay img').src = putanja;
        document.querySelector('.overlay').style.display = 'flex';
    })
}

function prev (){
    
        var prethodna = parseInt(trenutna) - 1;
        if (prethodna <= 0){
            prethodna = slike.length;
        } 
        document.querySelector('.overlay img').src = 'img/' + prethodna + '.jpeg';
        
        trenutna = prethodna;

}

function next () {
    var sledeca = parseInt(trenutna) + 1;
    if (sledeca > slike.length){
        sledeca = 1;
    }
    document.querySelector('.overlay img').src = 'img/' + sledeca + '.jpeg';

    trenutna = sledeca;
}


// ------Cookies-------


function setCookie(cookieName, cookieValue, expires) {
    var days = new Date();
    days.setTime(days.getTime() + expires * 24 * 60 * 60* 1000);
    days.toUTCString();
    document.cookie = cookieName + " = " + cookieValue + "; expires = " + days + "; path = /";
    
}

function newCookie(cookieName, cookieValue) {
    // var cookieName = prompt('Koji cookie zelite da sacuvate?');
    // var cookieValue = prompt('Sta zelite da upisete u cookie ' + cookieName + '?');
    // var expires = prompt('Koliko dana da se sacuva cookie?');
    var expires = 10;
    setCookie(cookieName, cookieValue, expires);
}

function setAll(){
    var name = document.getElementById('name').value;
    document.getElementById('name').value = "";
    newCookie('name', name);

     var dan = document.getElementById('dan').value;
    document.getElementById('dan').value = "";
    newCookie('dan', dan);

    var mesec = document.getElementById('mesec').value;
    document.getElementById('mesec').value = "";
    newCookie('mesec', mesec);

    var godina = document.getElementById('godina').value;
    document.getElementById('godina').value = "";
    newCookie('godina', godina);



};