let allBtn = document.getElementById('catagory-1');
let brandingBtn = document.getElementById('catagory-2');
let logoBtn = document.getElementById('catagory-3');
let uiBtn = document.getElementById('catagory-4');
let designBtn = document.getElementById('catagory-5');

let allImage = document.getElementById('all');
let brandingImage = document.getElementById('branding');
let logoImage = document.getElementById('logo');
let uiImage = document.getElementById('ui');
let designImage = document.getElementById('design');

allBtn.addEventListener('click', ()=> {
    allImage.style.display = "grid";
    brandingImage.style.display = "none";
    logoImage.style.display = "none";
    uiImage.style.display = "none";
    designImage.style.display = "none";
});

brandingBtn.addEventListener('click', ()=> {
    brandingImage.style.display = "grid";
    allImage.style.display = "none";
    logoImage.style.display = "none";
    uiImage.style.display = "none";
    designImage.style.display = "none";
});

logoBtn.addEventListener('click', ()=> {
    logoImage.style.display = "grid";
    allImage.style.display = "none";
    brandingImage.style.display = "none";
    uiImage.style.display = "none";
    designImage.style.display = "none";
});

uiBtn.addEventListener('click', ()=> {
    uiImage.style.display = "grid";
    allImage.style.display = "none";
    brandingImage.style.display = "none";
    logoImage.style.display = "none";
    designImage.style.display = "none";
});

designBtn.addEventListener('click', ()=> {
    designImage.style.display = "grid";
    allImage.style.display = "none";
    brandingImage.style.display = "none";
    logoImage.style.display = "none";
    uiImage.style.display = "none";
});