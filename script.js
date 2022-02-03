const searchP = document.querySelector('p');
const searchArea = document.querySelector('.search__area');
const searchAreaLimit = searchArea.getAttribute('maxlength')
const searchAreaSpan = document.querySelector('span');
searchAreaSpan.innerHTML = searchAreaLimit;

document.addEventListener('click', function (event){
    if(event.target.closest('.search__icon')){
        searchArea.classList.toggle('_active');
        searchP.classList.toggle('_active');
    }
    if(!event.target.closest('.search')){
        searchArea.classList.remove('_active');
        searchP.classList.remove('_active');
    }
    if(event.target.className !== '_active'){
        searchArea.value = '';
        searchAreaSpan.innerHTML = searchAreaLimit;
    }
})

document.addEventListener('keyup', function (event){
    if(event.code === 'Escape'){
        searchArea.classList.remove('_active');
        searchP.classList.remove('_active');
    }
    const textCounter = searchAreaLimit - searchArea.value.length;
    searchAreaSpan.innerHTML = textCounter;
})
