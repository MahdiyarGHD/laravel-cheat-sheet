hljs.highlightAll();

function getlink(id) {
    id = id.split('b-')[1] + "-body";
    copyText("https://mahdiyarghd.github.io/laravel-cheat-sheet" + "#" + id, '<span class="closebtn" onclick="if(this.parentElement.style.opacity > 1) { fade(this.parentElement) }">فهمیدم‌ !</span>  لینک پست کپی شد ');
}


function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

if (detectMob() == true) {
    var btns, i;
    btns = document.getElementsByClassName('btns');
    for (i = 0; i < btns.length; i++) {
        btns[i].classList.remove("group-hover:opacity-100");
        btns[i].style.opacity = 1;
        console.log('In Loop' + i);
    }
}

function copy(id) {
    let GetChID = id.split('-');
    let = contentHolder = document.getElementById('ch-' + GetChID[2]);
    // We will need a range object and a selection.
    var range = document.createRange(),
        selection = window.getSelection();

    selection.removeAllRanges();
    range.selectNodeContents(contentHolder);
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();

    var x = document.getElementById("alert");
    unfade(x);

    setTimeout(() => {
        let Opacity = x.style.opacity;
        if (Opacity >= 1) {
            fade(x);
        }
    }, 1500);

}


function copyText(text, alertext) {
    let span = document.createElement("span");
    span.innerHTML = text;
    var randomtext = 'textcopy' + Math.round(Math.random() * 10);
    span.setAttribute('id', randomtext);
    document.body.appendChild(span);
    span.style.opacity = 0;

    let = contentHolder = document.getElementById(randomtext);
    // We will need a range object and a selection.
    var range = document.createRange(),
        selection = window.getSelection();

    selection.removeAllRanges();
    range.selectNodeContents(contentHolder);
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();

    document.getElementById(randomtext).remove();

    var x = document.getElementById("alert");
    x.innerHTML = alertext;
    unfade(x);

    setTimeout(() => {
        let Opacity = x.style.opacity;
        if (Opacity >= 1) {
            fade(x);
        }
    }, 1500);
}

function fade(element) {
    var op = 1; // initial opacity
    var timer = setInterval(function() {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);

}

function unfade(element) {

    var op = 0.1; // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function() {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);

}

function search() {

    var input, filter, SearchElements, i, ElementText;
    input = document.getElementById('textinput');
    filter = input.value.toLowerCase();
    SearchElements = document.getElementsByClassName('searchContent');
    if (filter != "") {
        for (i = 0; i < SearchElements.length; i++) {
            ElementText = SearchElements[i].innerHTML;
            if (ElementText.indexOf(filter) > -1) {
                SearchElements[i].parentElement.parentElement.style.display = "";
            } else {
                SearchElements[i].parentElement.parentElement.style.display = "none";
            }
        }
    } else {
        for (i = 0; i < SearchElements.length; i++) {
            SearchElements[i].parentElement.parentElement.style.display = "";
        }
    }
}