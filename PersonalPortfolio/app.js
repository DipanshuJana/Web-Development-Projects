const hamburgerMenu = document.querySelector('.hamburger-menu');
const navBar = document.getElementById('nav-right');
const menuLines = document.querySelectorAll('.line');
const logo = document.querySelector('.logo');

const projects = document.getElementById('pr-info');
const code = document.getElementById('code-info');
const github = document.getElementById('git-info');
const awards = document.getElementById('awards-info');

const allBtn = document.getElementById('category-1');
const techBtn = document.getElementById('category-2');
const designBtn = document.getElementById('category-3');
const natureBtn = document.getElementById('category-4');

const allImages = document.getElementById('all');
const techImages = document.getElementById('technology');
const designImages = document.getElementById('design');
const natureImages = document.getElementById('nature');

var isTrue = false;

hamburgerMenu.addEventListener('click', hamburgerMenuFunction);

function hamburgerMenuFunction(){
    if(navBar.style.right = "-100%" && isTrue == false){
        navBar.style.cssText = "display: flex !important";
        Array.from(menuLines).forEach(element => {
            element.style.cssText += "background-color: black;"
        });
        hamburgerMenu.style.cssText += "background-color: white;";
        hamburgerMenu.style.cssText += "padding: 10px 7px;";
        hamburgerMenu.style.cssText += "border-radius: 50%;";
        navBar.style.right = "0";
        navBar.style.animation = "move-left 1s forwards";
        isTrue = true;
    }
    
    else if(isTrue){
        Array.from(menuLines).forEach(element => {
            element.style.cssText += "background-color: white;"
        });
        hamburgerMenu.style.cssText += "background-color: black;";
        navBar.style.right = "-100%";
        navBar.style.animation = "move-right 1s forwards";
        isTrue = false;
    }
}

(function count(){
    for (let i = 1; i < 26; i++) {
        projectsNumCount(i);
    }

    for (let i = 1; i < 2001; i++) {
        codesNumCount(i);
    }

    for (let i = 1; i < 7; i++) {
        githubNumCount(i);
    }

    for (let i = 1; i < 11; i++) {
        awardsNumCount(i);
    }

    function projectsNumCount(i){
        setTimeout(() => {
            projects.innerText = i + "+";
        }, 500*i);
    }

    function awardsNumCount(i){
        setTimeout(() => {
            awards.innerText = i + "+";
        }, 500*i);
    }

    function codesNumCount(i){
        setTimeout(() => {
            code.innerText = i + "+";
        }, 5*i);
    }

    function githubNumCount(i){
        setTimeout(() => {
            github.innerText = i + "+";
        }, 500*i);
    }
}());

(function showImage(){
    allBtn.addEventListener('click', ()=>{
        allImages.style.display = "grid";
        techImages.style.display = "none";
        designImages.style.display = "none";
        natureImages.style.display = "none";
    });
    
    techBtn.addEventListener('click', ()=>{
        techImages.style.display = "grid";
        allImages.style.display = "none";
        designImages.style.display = "none";
        natureImages.style.display = "none";
    });

    designBtn.addEventListener('click', ()=>{
        designImages.style.display = "grid";
        allImages.style.display = "none";
        techImages.style.display = "none";
        natureImages.style.display = "none";
    });

    natureBtn.addEventListener('click', ()=>{
        natureImages.style.display = "grid";
        allImages.style.display = "none";
        techImages.style.display = "none";
        designImages.style.display = "none";
    });
}());

logo.addEventListener('click', ()=>{
    location.reload();
})