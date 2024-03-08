function sleft() {
    var container = document.querySelector(".experience-scroll");
    container.scrollLeft -=100
}
function sright() {
    var container = document.querySelector(".experience-scroll");
    container.scrollLeft +=100
}


function mkt(){
    let skills = document.querySelector(".skills-sec");
    if(skills.scrollLeft ===940){
        return false;
    } else if(skills.scrollLeft >=1800){
        skills.scrollLeft = 940
    } else{
        skills.scrollLeft =940;
    }
}
function dev() {
    let skills = document.querySelector(".skills-sec");
    if(skills.scrollLeft ===1860){
        return false;
    } else if(skills.scrollLeft <=1800){
        skills.scrollLeft =1860
    } else{
        skills.scrollLeft =1860
    }
}
function fin() {
    let skills = document.querySelector(".skills-sec");
    if(skills.scrollLeft >=900){
        skills.scrollLeft = 10
    }
}