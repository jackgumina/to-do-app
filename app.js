function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {

    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');
    newLi.className += "mdl-list__item";

    // create a new input
    let checkbox = document.createElement('input');
    checkbox.className += "mdl-checkbox__input";

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    // create a new button
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className += "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect";

    deleteBtn.addEventListener('click', function(event){
      toDoList.removeChild(this.parentElement);
    })

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    newLi.appendChild(deleteBtn);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = "";
  });
}

window.onload = function() {
  onReady();
};
