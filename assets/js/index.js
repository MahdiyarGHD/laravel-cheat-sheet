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

if (localStorage.getItem('DarkMode')) {

    if (localStorage.getItem('DarkMode') == "Dark") {

        document.body.classList.toggle('dark');
        document.body.classList.toggle('light');

        var DarkModeIcon = document.querySelector('#DarkModeButton');
        var title_header = document.querySelector('#title-header');
        var copyRight = document.querySelector('.copyright');

        copyRight.style.color = 'rgba(233, 233, 233, 0.849)'

        title_header.classList.toggle('LightModeTitle');
        title_header.classList.toggle('darkModeTitle');

        DarkModeIcon.classList.toggle('icon-sun')
        DarkModeIcon.classList.toggle('icon-moon')
    }

}

function DarkMode() {

    if (!localStorage.getItem('DarkMode')) {
        localStorage.setItem('DarkMode', 'Light');
    } else {
        switch (localStorage.getItem('DarkMode')) {
            case 'Dark':
                var DarkModeIcon = document.querySelector('#DarkModeButton');
                var title_header = document.querySelector('#title-header');
                document.body.classList.toggle('dark');
                document.body.classList.toggle('light');

                DarkModeIcon.classList.toggle('icon-moon');
                DarkModeIcon.classList.toggle('icon-sun');

                title_header.classList.toggle('LightModeTitle');
                title_header.classList.toggle('darkModeTitle');

                var copyRight = document.querySelector('.copyright');
                copyRight.style.color = 'rgba(65, 63, 63, 0.849)';

                localStorage.setItem('DarkMode', 'Light');
                break;
            case 'Light':
                var DarkModeIcon = document.querySelector('#DarkModeButton');
                var title_header = document.querySelector('#title-header');
                document.body.classList.toggle('dark');
                document.body.classList.toggle('light');

                DarkModeIcon.classList.toggle('icon-sun')
                DarkModeIcon.classList.toggle('icon-moon')

                title_header.classList.toggle('darkModeTitle')
                title_header.classList.toggle('LightModeTitle')

                var copyRight = document.querySelector('.copyright');
                copyRight.style.color = 'rgba(233, 233, 233, 0.849)';

                localStorage.setItem('DarkMode', 'Dark');
                break;
        }
    }
}


if (detectMob() == false) {

    function Fade(Parentid) {
        var object = document.getElementById(Parentid);
        var icons = object.getElementsByTagName('a');
        for (i = 0; i < icons.length; i++) {
            icons[i].classList.add('fade');
        }
    }

    function UnFade(Parentid) {
        var object = document.getElementById(Parentid);
        var icons = object.getElementsByTagName('a');
        for (i = 0; i < icons.length; i++) {
            icons[i].classList.remove('fade');
            icons[i].classList.add('unfade');
        }
    }

}
if (detectMob()) {

    btns = document.getElementsByClassName('btn');
    for (i = 0; i < btns.length; i++) {
        btns[i].style.opacity = '100%';
    }

}

function copyText(text) {

    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = text;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);

}

function CopyCode(id) {
    var element = document.getElementById(id);
    copyText(element.getElementsByClassName('language-php')[0].innerText);
    var x = document.getElementById("alert");
    x.innerHTML = 'کد مورد نظر کپی شد!';
    unfadeElement(x);

    setTimeout(() => {
        let Opacity = x.style.opacity;
        if (Opacity >= 1) {
            fadeElement(x);
        }
    }, 1500);
}

function CopyLink(id) {
    copyText('https://MahdiyarGHD.github.io/laravel-cheat-sheet#' + id);
    let x;
    x = document.getElementById("alert");
    x.innerHTML = 'لینک پست کپی شد !';
    unfadeElement(x);

    setTimeout(() => {
        let Opacity = x.style.opacity;
        if (Opacity >= 1) {
            fadeElement(x);
        }
    }, 1500);
}

function fadeElement(element) {
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

function unfadeElement(element) {

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

document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
    document.getElementById("contextMenu")
        .style.display = "none"
}

function rightClick(e) {
    e.preventDefault();

    if (document.getElementById("contextMenu").style.display == "block") {
        hideMenu();
    } else {
        var menu = document.getElementById("contextMenu")
        menu.style.display = 'block';
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
    }
}
hljs.highlightAll();