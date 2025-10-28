/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions

//showPage -- append a page of nine students



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
            </div>`;

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
let pages = [12,32,43,11,45,16,97,28,91,12,34,64,78,91]   //arr  pagina perPagina


// pages  2 3        pozitiile  3 4 5 
// pages  3 2        pozitiile  4 5
function pagination(arr, pagina, perPagina){

  let paged=[];

  for(let i=perPagina*(pagina-1); i<pagina*perPagina&&i<arr.length; i++){
    paged.push(arr[i]);
    
  }
  return paged;

}


function createButton(number){
  let btn = document.createElement("li");
  btn.innerHTML = `<button type="button" class="active btn-page">${number}</button>`;

  return btn;
}

function attachButtons(perPagina){
  let btnList=document.querySelector(".link-list");
  btnList.innerHTML="";
  for(let i=1;i<data.length/perPagina+1;i++){
     btnList.appendChild(createButton(i));
  }
}
