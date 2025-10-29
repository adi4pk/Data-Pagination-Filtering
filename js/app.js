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


let numberOfElementPerPage=8;
let currentStudentIndex = 0;

attachCards(pagination(data,1,numberOfElementPerPage));
attachButtons(numberOfElementPerPage);

//event

btnList.addEventListener("click",(ev) =>{
    let obj = ev.target;
    if(obj.classList.contains("btn-page")){

        console.log(obj.textContent);
        attachCards(pagination(data,obj.textContent, numberOfElementPerPage));

    }
});

addStudentBtn.addEventListener("click", ()=>{
    modalContainer.classList.add("show");
    modalContainer.classList.toggle("hide");
})

discardStd.addEventListener("click", () =>{
    modalContainer.classList.toggle("hide");
})


saveStud.addEventListener("click", () =>{

    modalContainer.classList.toggle("hide");
    const newStud = saveCard();
    data.push(newStud);

    let newCard = createCard(newStud);
    studentContainer.append(newCard);

    attachCards(pagination(data,1,numberOfElementPerPage));
    studModalContainer.classList.toggle("hide");

    studentModal(newStud);

    // console.log("test");
    // console.log(data);


    
})

leftArrow.addEventListener("click", () =>{
    updateModal(currentStudentIndex -1);
})

rightArrow.addEventListener("click", () =>{
    updateModal(currentStudentIndex +1);
})