const hamburgerMenu = document.querySelector('.hamburger-menu');
const catagoryList = document.getElementsByClassName('catagory-list')[0];
const imageGalary = document.getElementsByClassName('image-galary')[0];
const navBar = document.getElementById('nav-right');
let isTrue = false;

hamburgerMenu.addEventListener('click', ()=>{
    if(navBar.style.right = "-100%" && isTrue == false){
        navBar.style.cssText = "display: flex !important";
        Array.from(hamburgerMenu.children).forEach(element => {
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
        Array.from(hamburgerMenu.children).forEach(element => {
            element.style.cssText += "background-color: white;"
        });
        hamburgerMenu.style.cssText += "background-color: black;";
        navBar.style.right = "-100%";
        navBar.style.animation = "move-right 1s forwards";
        isTrue = false;
    }
});

(function count(){
    for (let i = 1; i < 26; i++) {projectsNumCount(i);}
    for (let i = 1; i < 2001; i++) {codesNumCount(i);}
    for (let i = 1; i < 7; i++) {githubNumCount(i);}
    for (let i = 1; i < 11; i++) {awardsNumCount(i);}

    function projectsNumCount(i){
        setTimeout(() => {
            document.getElementById('pr-info').innerText = i + "+";
        }, 500*i);
    }

    function awardsNumCount(i){
        setTimeout(() => {
            document.getElementById('awards-info').innerText = i + "+";
        }, 500*i);
    }

    function codesNumCount(i){
        setTimeout(() => {
            document.getElementById('code-info').innerText = i + "+";
        }, 5*i);
    }

    function githubNumCount(i){
        setTimeout(() => {
            document.getElementById('git-info').innerText = i + "+";
        }, 500*i);
    }
}());

(function showImage(){
    Array.from(catagoryList.children).forEach((button)=>{
        button.addEventListener('click', (e)=>{
            Array.from(imageGalary.children).forEach((imageDiv)=>{imageDiv.style.display = "none";})
            if (e.target.id === 'category-1'){
                document.getElementById('all').style.display = "grid";
            }
            else if (e.target.id === 'category-2'){
                document.getElementById('technology').style.display = "grid";
            }
            else if (e.target.id === 'category-3'){
                document.getElementById('design').style.display = "grid";
            }
            else {
                document.getElementById('nature').style.display = "grid";
            }
        })
    })
}());

(function clearValues(){
    document.getElementById('submit-btn').addEventListener('click', ()=>{
        document.getElementById('name-area').value = "";
        document.getElementById('msg-area').value = "";
        document.getElementById('email-area').value = "";

        setTimeout(() => {
            alert('Your response has been submitted sucessfully!');
        }, 100);
    })
}());

document.querySelector('.logo').addEventListener('click', ()=>{
    location.reload();
})