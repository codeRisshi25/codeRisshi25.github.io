const overlay = document.querySelector('.overlay');
const projects = document.querySelectorAll('.project');
const showOverlay = function(){
    overlay.classList.remove('hidden');
}

const hideOverlay = function(){
    overlay.classList.add('hidden');
}

//add anchors to the education section


for (let i = 0; i < projects.length; i++){
    projects.addEventListener('onmouseenter', showOverlay());
}
projects.addEventListener('mouseleave', hideOverlay());