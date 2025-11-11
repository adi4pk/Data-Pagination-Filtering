

// functie ce creeaza un student
// ---> functia urmeaza sa fie rulata in functie de cate obiecte sunt in lista (forEach)

function createCard(student) {
  let card = document.createElement("li");

  card.classList.add("card");
  card.classList.add("student-item");
  card.classList.add("cf");
  card.innerHTML = `<div class="student-details">
               <img class="avatar" src="${student.picture.large}" alt="Profile Picture">
               <h3>${student.name.first} ${student.name.last}</h3>
               <span class="email">${student.email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${student.registered.date}</span>
            </div>
            <button class="edit-btn">EDIT</button>`;

  return card;
}

function attachCards(arr) {
  let studentContainer = document.querySelector(".student-list");
  studentContainer.innerHTML = "";

  arr
    .map((e) => createCard(e))
    .forEach((e) => {
      studentContainer.append(e);
    });
}
//           0   1  2  3  4  5  6  7  8  9  10 11 12 13
let pages = [12, 32, 43, 11, 45, 16, 97, 28, 91, 12, 34, 64, 78, 91]; //arr  pagina perPagina

// pages  2 3        pozitiile  3 4 5
// pages  3 2        pozitiile  4 5
function pagination(arr, pagina, perPagina) {
  let paged = [];

  for (
    let i = perPagina * (pagina - 1);
    i < pagina * perPagina && i < arr.length;
    i++
  ) {
    paged.push(arr[i]);
  }
  return paged;
}

function createButton(number) {
  let btn = document.createElement("li");
  btn.innerHTML = `<button type="button" class="active btn-page">${number}</button>`;

  return btn;
}

function attachButtons(perPagina) {
  let btnList = document.querySelector(".link-list");
  btnList.innerHTML = "";
  for (let i = 1; i < data.length / perPagina + 1; i++) {
    btnList.appendChild(createButton(i));
  }
}

//functie ce extrage datele din inputuri si returneaza un student cu datele din inputuri
function saveCard() {
  // let card = document.createElement("li");
  let firstName = document.querySelector(".first-box");
  let lastName = document.querySelector(".last-box");
  let email = document.querySelector(".email-box");
  let datejoined = document.querySelector(".calendar-box");

  let studentNou = {
    name: {
      // title: "",
      first: firstName.value,
      last: lastName.value,
    },
    email: email.value,
    registered: {
      date: datejoined.value,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/lego/1.jpg",
      medium: "",
      thumbnail: "",
    },
  };

  firstName.value = "";
  lastName.value = "";
  email.value = "";
  datejoined.value = "";
  return studentNou;
}

// function newStudent(student) {
  
//   let newStudentModal = document.createElement("div");
//   newStudentModal.classList.add("student-modal-container");
//   newStudentModal.innerHTML = ` <div class="student-modal">
//                               <div class="name-section">
                                    
//                                       <h1>${student.name.first}</h1>
//                                       <h1>${student.name.last}</h1>
//                                       <h1> TEST</h1>
                                    
//                                   </div>
//                               <button class="close-modal-stud">Close</button>
//                           </div>`;

//   firstNameField.textContent = student.name.first;
//   lastNameField.textContent = student.name.last;
//   emailField.textContent = `Email: ${student.email}`;
//   joindate.textContent = `Joined in ${student.registered.date}`;

//   let closeBtn = newStudentModal.querySelector(".close-modal-stud");
//   // document.body.append(student);

//   closeBtn.addEventListener("click", () => {
//     newStudentModal.remove();
//     document.querySelector(".student-modal-container")?.remove();
//   });

//   document.body.appendChild(newStudentModal);
// }

function findStudentByEmail(email) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].email === email) {
      return data[i];
    }
  }

  return -1;
}

function findPreviousStudentByEmail(email) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].email === email) {
      return data[i];
    }
  }

  return -1;
}

function findNextStudentByEmail(email) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].email === email) {
      if (i == data.length) {
        return data[0];
      }

      return data[i + 1];
    }
  }

  return -1;
}

function displayStudent(student) {
  
  // Remove any existing modal before creating a new one
  document.querySelector(".std-display-modal-container")?.remove();

  let studentModal = document.createElement("div");
  studentModal.classList.add("show");
  studentModal.classList.add("std-display-modal-container");
  studentModal.innerHTML = `<button class="modal-arrow-left modal-arrow">←</button>
                            <div class="display-student-modal">
                                
                                <img class="avatar" src="${student.picture.medium}" alt="Profile Picture">
                                <div class="name-section">
                                      
                                        <h1>${student.name.first}</h1>
                                        <h1>${student.name.last}</h1>
                                        
                                </div>
                                <span class="email">${student.email}</span>
                                <div class="joined-details">
                                  <span class="date">Joined ${student.registered.date}</span>
                                </div>
                                <button class="close-modal">Close</button>
                            </div>
                            <button class="modal-arrow-right modal-arrow">→</button>`;

    // studentModal.classList.toggle("hide");

    emailField.textContent = `Email: ${student.email}`;
    joindate.textContent = `Joined in ${student.registered.date}`;

    let closeBtn = studentModal.querySelector(".close-modal");
    // document.body.append(student);

      closeBtn.addEventListener("click", () => {
        studentModal.remove();
      });



    let leftModalArrow = studentModal.querySelector(".modal-arrow-left");
    leftModalArrow.addEventListener("click", () =>{
    
    updateModal(currentStudentIndex -1);
    console.log("test-left");
    });


    let rightModalArrow = studentModal.querySelector(".modal-arrow-right");
    rightModalArrow.addEventListener("click", () =>{

    
      updateModal(currentStudentIndex +1);
      console.log("test-right");
    })




     // Append modal to page
    let page = document.querySelector(".page");
    page.appendChild(studentModal);





}

function viewStudentModal(student) {
  console.log(student);

  
  for (let i = 0; i < data.length; i++) {
    if (data[i].email === student.email) {
      currentStudentIndex = i;
      break;
    }
  };


  if (student !== -1) {
    displayStudent(student);
  }
}


function creationModal(index){
  if (index >=0 && index < data.length){
    currentStudentIndex = index;
  }
}


function updateModal(index) {
  if (index >= 0 && index < data.length) {
    currentStudentIndex = index;
    displayStudent(data[index]);
  }
}


function generateEditModal(){
  let editModal = document.createElement("div");

  editModal.classList.add("edit-student-modal-container");
  // editModal.classList.add("hide");
  

  editModal.innerHTML = 
  
`<div class="edit-student-modal">
    <img class="avatar" src="https://randomuser.me/api/portraits/lego/1.jpg">
    <div class="edit-name-section name-student">
      <h1 class="edit-std-first">First name</h1>
      <input type="text">
      <h1 class="edit-std-last">Last Name</h1>
      <input type="text">
    </div>
    <p class="edit-std-email">Email:</p>
    <input type="text">
    <p class="edit-std-joindate">Joined in:</p>
    <input type="text">
    <button class="close-btn-newstud">CLOSE</button>
    <div class="button-section">
      <button class="saveStd btn">SAVE</button>
      <button class="discardStd btn">discard</button>
    </div>
  </div>`;

  document.body.appendChild(editModal);
}


function saveStudent(){

};