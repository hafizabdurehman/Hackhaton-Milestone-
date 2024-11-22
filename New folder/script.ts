    
const togglebutton=document.getElementById("toggle-skills") as HTMLButtonElement
const skils=document.getElementById('skills') as HTMLElement

togglebutton.addEventListener('click', ()=> {
    if (skils.style.display ==='none') {
        skils.style.display ='block'
    } else {
        skils.style.display ='none'
    }
});