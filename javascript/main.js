document.getElementById('about').onclick = function() {
    window.open("about:blank", "_self")
}

document.getElementById('source').onclick = function() {
    window.open("https://github.com/gyan-js/resu-generate", "_self")
}

document.getElementById('issue').onclick = function() {
    window.open("https://github.com/gyan-js/resu-generate/issues", "_self")
}

document.getElementById('github').onclick = function() {
    window.open("https://github.com/gyan-js", "_self")
}

document.getElementById('contact').onclick = function() {
    window.open("mailto:gyanshresth03@gmail.com", "_self");
}

function switchToResumeScreen() {
    document.querySelector('footer').style.display = 'none';
    document.getElementById('home_button').style.display = 'none';
    document.getElementById('Logo').style.display = 'none'
    document.querySelector('aside').style.display = 'block';
    document.querySelector('header').style.display = 'block'
    //document.getElementById('Logo').style.fontSize = '2em'
}