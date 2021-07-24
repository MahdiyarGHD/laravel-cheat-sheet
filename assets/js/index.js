$(document).ready(function() {

    if(localStorage.getItem("DarkMode") == "On") 
    {
        $(document.body).addClass('dark');
        $(document.body).removeClass('light');
        $('#toggle').attr('checked', 'true');
        $('.header-title').css('color', 'rgba(255, 255, 255, 0.911)');
        $('.header-description').css('color', 'rgba(255, 255, 255, 0.911)');
        $('.code-container').css('background-color', '#FFFFFF');
        $('.head-text').css('color', '#FFFFFF');
        $('.footer-item').css('color', '#ffff');
        $('.paragraph').css('color', '#d5d5d5');
        $('#hljs-link').attr('href', 'assets/js/lib/highlightjs/styles/github.min.css');
    }

    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
{
        $('#GoUp').css('display','block');
    } else {
        $('#GoUp').css('display','none');
    }
}

    
    hljs.highlightAll();

});


$('#toggle').click(function () { 

    if( $('#toggle').attr('checked') ) {
        // Not Checked
        $('#hljs-link').attr('href', 'assets/js/lib/highlightjs/styles/github-dark.min.css');
        $('.code-container').css('background-color', '#0C1117');
        $(document.body).addClass('light');
        $(document.body).removeClass('dark');
        $('.header-title').css('color', '#252525');
        $('.header-description').css('color', '#252525');
        $('.head-text').css('color', '#252525');
        $('.paragraph').css('color', '#454545');
        $('#toggle').removeAttr('checked');
        localStorage.setItem("DarkMode", "Off");
        $('.footer-item').css('color', '#252525');

    } else {
        // Checked
        $('.footer-item').css('color', '#ffff');
        $('.paragraph').css('color', '#d5d5d5');
        $('.code-container').css('background-color', '#FFFFFF');
        $('.head-text').css('color', '#FFFFFF');
        $('#hljs-link').attr('href', 'assets/js/lib/highlightjs/styles/github.min.css');
        $(document.body).addClass('dark');
        $(document.body).removeClass('light');
        $('.header-title').css('color', 'rgba(255, 255, 255, 0.911)');
        $('.header-description').css('color', 'rgba(255, 255, 255, 0.911)');
        $('#toggle').attr('checked', 'true');
        localStorage.setItem("DarkMode", "On");
    }

});


function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    $('#GoUp').css('opacity','100%');
}