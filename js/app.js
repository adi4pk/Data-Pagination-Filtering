//selectori

let studentContainer = document.querySelector(".student-list");
let btnList = document.querySelector(".link-list");
let btn = document.querySelector(".button");

let modalContainer = document.querySelector(".modal-wrapper");
let addStudentBtn = document.querySelector(".add-student-btn");
let discardStd = modalContainer.querySelector(".discardStd");

let saveStud = document.querySelector(".saveStd");

let studModalContainer = document.querySelector(".student-modal-container");
let nameSection = document.querySelector(".name-student");

let firstNameField = document.querySelector(".std-first");
let lastNameField = document.querySelector(".std-last");
let emailField = document.querySelector(".std-email");
let joindate = document.querySelector(".std-joindate");



let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");

let displayStudContainer = document.querySelector(".display-student-modal");
let leftModalArrow = document.querySelector(".modal-arrow-left");
let rightModalArrow = document.querySelector(".modal-arrow-right");

let numberOfElementPerPage = 8;
let currentStudentIndex = 0;

loadFromLocalStorage();

attachCards(pagination(data, 1, numberOfElementPerPage));
attachButtons(numberOfElementPerPage);

// let btnEdit = document.querySelector(".edit-btn");

//event

btnList.addEventListener("click", (ev) => {
  let obj = ev.target;
  if (obj.classList.contains("btn-page")) {
    console.log(obj.textContent);
    attachCards(pagination(data, obj.textContent, numberOfElementPerPage));
  }
});

addStudentBtn.addEventListener("click", () => {
  modalContainer.classList.add("show");
  modalContainer.classList.toggle("hide");
});

discardStd.addEventListener("click", () => {
  modalContainer.classList.toggle("hide");
});

saveStud.addEventListener("click", () => {
  //todo: functie validare inputuri

  //todo: functie ce extrage datele din inputuri si returneaza un student cudatele din inputuri

  ///todo: save and close
  let studentNou = saveCard();
  data.push(studentNou);
  attachCards(pagination(data, 1, numberOfElementPerPage));
  attachButtons(numberOfElementPerPage);
  modalContainer.classList.toggle("hide");

  saveToLocalStorage();
});

// leftArrow.addEventListener("click", () =>{
//     updateModal(currentStudentIndex -1);
// })

// rightArrow.addEventListener("click", () =>{
//     updateModal(currentStudentIndex +1);
// })

studentContainer.addEventListener("click", (ev) => {
  //--event bubbling - addEventListener pe containerul principal
  let obj = ev.target;

  if (obj.classList.contains("email")) {
    let student = findStudentByEmail(obj.textContent);

    viewStudentModal(student);
  }
});


// btnEdit.addEventListenre("click", (ev) =>{}...)          // WRONG X 
studentContainer.addEventListener("click", (ev) => {
    let obj = ev.target;
    if(obj.classList.contains("edit-btn")){
        // if(!(editModal))
    console.log("TESTETESTETETEDSTETST");
    let card = obj.parentNode;
    console.log(card.children);
    let avatar = card.children[0].children[0];

    card.innerHTML =
    `<div class="edit-student">
    <img class="avatar" src=${avatar.src}>
    <div class="edit-name-section">
      <h1 class="edit-std-first">First name</h1>
      <input type="text" class="firstname-value">
      <h1 class="edit-std-last">Last Name</h1>
      <input type="text" class="lastname-value">
    </div>
    <p class="edit-std-email">Email:</p>
    <input type="text" class="email-value">
    <p class="edit-std-joindate">Joined in:</p>
    <input type="text" class="joindate-value">
    <div class="button-section">
      <button class="saveStd btn">SAVE</button>
      <button class="discardStd btn">discard</button>
    </div>
  </div>`;


    // generateEditModal()
    }
});


studentContainer.addEventListener("click", (ev) =>{
    let obj = ev.target;
    // let card = obj.parentNode.parentNode.parentNode;     // pay attention to the HTML structure
    // let card = obj.closest(".card");
    let card = obj.parentNode;
    
    if(obj.classList.contains("saveStd")){
        console.log(card);

        let avatar = card.children[0].children[0];

        let firstName = card.querySelector(".firstname-value");
        let lastName = card.querySelector(".lastname-value");
        let email = card.querySelector(".email-value");
        let joinDate = card.querySelector(".joindate-value");

        card.innerHTML =
            `<div class="edit-student">
            <img class="avatar" src=${avatar.src}>
            <div class="edit-name-section">
            <h1 class="edit-std-first">${firstName.value}</h1>
            
            <h1 class="edit-std-last">${lastName.value}</h1>
            
            </div>
            <p class="edit-std-email">${email.value}</p>
           
            <p class="edit-std-joindate">${joinDate.value}</p>
            
            <div class="button-section">
            <button class="saveStd btn">SAVE</button>
            <button class="discardStd btn">discard</button>
            </div>
        </div>`;
    }
})
