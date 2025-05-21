function toggleDescription(descriptionId,button){
    const description=document.getElementById(descriptionId);
    if(description.classList.contains('expanded')){
        description.classList.remove('expanded')
        button.textContent='Read More'
    } else{
        description.classList.add('expanded');
        button.textContent='Read Less'
    }
}