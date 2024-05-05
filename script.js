var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContaineer');
var inputField = document.getElementById('inputFiled');

addToDoButton.onclick = function() {
    //verifier si l'input n'est pas vide 
    if(inputField.value != ""){
        //si l'input n'est pas vide , créer un pargraphe
        var pargraphe =document.createElement('p')
    }
    //valorisé ce paragraphe avec le contenu de l'input
    pargraphe.innerText = inputField.value ;

    //stylisé le paragraphe 
    pargraphe.classList.add('paragraphe_style');

    //insérer le paragraphe dans l'élément toDoContainer
    toDoContainer.appendChild(pargraphe);

    //vidé l'input quand le paragraphe est ajouté
    inputField.value = "";

    //barré la paragraphe quand on clique dessus 
    pargraphe.addEventListener('click',function(){
        pargraphe.classList.add('paragraphe_click');
    })
    //supprimer la tache quand on double clik sur la tache
    pargraphe.addEventListener('dblclick',function(){
        toDoContainer.remove(pargraphe);
    })
}