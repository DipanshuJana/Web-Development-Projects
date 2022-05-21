let projects = document.getElementById('projectsNumber');
let awards = document.getElementById('awardsNumber');
let teams = document.getElementById('teamsNumber'); 
let codes = document.getElementById('codesNumber');

for (let i=1; i <= 2393; i++) {
    displayProjects(i);
};

for (let i=1; i <= 54; i++) {
    displayAwards(i);
};

for (let i=1; i <= 120; i++) {
    displayTeams(i);
};

for (let i=1; i <= 550; i++) {
    displayCodes(i);
};

// functions containing the logic for increment of the numbers

function displayProjects(i){
    setTimeout(() => {
        projects.innerHTML = i;
    }, 5*i);
};

function displayAwards(i){
    setTimeout(() => {
        awards.innerHTML = i;
    }, 100*i);
};

function displayTeams(i){
    setTimeout(() => {
        teams.innerHTML = i;
    }, 80*i);
};

function displayCodes(i){
    setTimeout(() => {
        codes.innerHTML = i;
    },25*i);
};