var togglebutton = document.getElementById("toggle-skills");
var skils = document.getElementById('skills');
togglebutton.addEventListener('click', function () {
    if (skils.style.display === 'none') {
        skils.style.display = 'block';
    }
    else {
        skils.style.display = 'none';
    }
});
