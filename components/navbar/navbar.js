// navbar.js
function loadNavbar() {
    // // let root = 'olgagavrysh.com'; // site url
    // // let root = 'C:/Users/grosb/source/repos/portfoliolga'; // dev site url
    // const navbarContainer = document.getElementById('navbar-container');
    // // let navbarContent = root+'/components/navbar/navbar.html'; // Path to your navbar file
    // let navbarContent = root+'/components/navbar/navbar.html'; // Path to your navbar file
    
    // fetch(navbarContent)
    //     .then(response => response.text())
    //     .then(data => {
    //         navbarContainer.innerHTML = data;
    //     });

    // for now copy text from navbar.html cause static content and site not online yet
    let headerElement = document.getElementById('header');
    headerElement.innerHTML = '<nav class="navbar navbar-expand-lg navbar-light bg-light"><div class="logo" id="logoOG"><img src="assets/logo.png" width="38" height="38"> Olga Gavrysh</div><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav ml-auto"><li class="nav-item"><a class="nav-link" href="index.html">Portfolio</a></li><li class="nav-item"><a class="nav-link" href="about.html">About</a></li><li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li></ul></div></nav>'
}

function setActiveNavLinks() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (currentPage.endsWith(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    setActiveNavLinks();
});