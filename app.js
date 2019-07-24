const addInput = document.querySelector('#addinput');
const addButton = document.querySelector('#addbutton');
const mangaList = document.querySelector('.mangaList');
const possededManga = document.querySelector('.possededManga');


 
// Evenement pour ajouter un tome
addButton.addEventListener('click',  addManga);
 
// Fonction pour ajouter un tome
function addManga(){
 
  if(addInput.value === ''){
 
    alert('Attention le champ est vide')
 
  }else{
     
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
 
    checkbox.type = 'checkbox';
    label.innerText = addInput.value;

 
    li.appendChild(checkbox);
    li.appendChild(label);
 
    mangaList.appendChild(li);
 
    // nettoyer le champ input 
    addInput.value = '';
 
    checkbox.addEventListener('click', posseded);
 
  }
 
}

// Fonction pour dire que l'on possède le tome
function posseded(e){
 
  const manga = e.target;
  const li = manga.parentNode;
  console.log(li);
 
  if(manga.getAttribute('checked')){
 
    mangaList.appendChild(li);
    manga.removeChild('checked');
 
  }else{
    possededManga.appendChild(li);
    manga.setAttribute('checked', 'checked');
  }
 
}
