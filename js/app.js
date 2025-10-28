//selectori

let studentContainer = document.querySelector(".student-list");
let btnList = document.querySelector(".link-list");
let btn = document.querySelector(".button");

let numberOfElementPerPage=8;

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