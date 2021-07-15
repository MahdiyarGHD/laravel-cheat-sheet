hljs.highlightAll();

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

if (localStorage.getItem('DarkMode'))
  {

    if (localStorage.getItem('DarkMode') == "Dark") {

            document.body.classList.toggle('dark');
            document.body.classList.toggle('light');

            var DarkModeIcon = document.querySelector('#DarkModeButton');
            var title_header = document.querySelector('#title-header');
            
            title_header.classList.toggle('LightModeTitle');
            title_header.classList.toggle('darkModeTitle'); 

            DarkModeIcon.classList.toggle('icon-sun')
            DarkModeIcon.classList.toggle('icon-moon')             
    }

}
  function DarkMode() {

        if (!localStorage.getItem('DarkMode'))
        {
            localStorage.setItem('DarkMode', 'Light');
        }
        else {
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

                    localStorage.setItem('DarkMode', 'Dark');
                    break;                    
            }
        }
    }


    if(detectMob() == false) {

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
    if (detectMob())
    {

        btns = document.getElementsByClassName('btn');
        for (i = 0; i < btns.length; i++) {
            btns[i].style.opacity = '100%';
        }
    
    }

