const form = document.querySelector("form");
const cardsContainer = document.querySelector(".cardsContainer");

const allCards = [];

const createCard = () => {
  cardsContainer.innerHTML = "";
  allCards.forEach((ele, i) => {
    const {name, email, image, id, createdAt} = ele;
    cardsContainer.innerHTML += ` 
            <div class="card">

     <div class='cardHeader'>
        <img src=${image} alt="img" />
        <div class="btnContainer">
           <button onclick='del(${i})'>del</button>
        </div>
      </div>
      <div class="cardInfo">
        <p><strong>name</strong>${name}</p>
        <p><strong>email</strong>${email}</p>
        <span class="cardDate">${createdAt}</span>
      </div>
      </div>
      
        `;
  });
};

const del = function (id) {
  allCards.splice(id, 1);
  createCard();
};

createCard();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {name, email, image} = e.target.elements;

  if (!name.value || !email.value || !image.value) {
    const err = document.createElement("p");
    err.classList.add("err");
    err.textContent = "give input";
    document.body.prepend(err);
    return
  }

  allCards.push({
    id: allCards.length + 1,
    name: name.value,
    email: email.value,
    image: image.value,
    createdAt: new Date(),
  });
  console.log({
    id: allCards.length + 1,
    name: name.value,
    email: email.value,
    image: image.value,
    createdAt: new Date(),
  });
  createCard();
  console.log(allCards);
  // form.reset();
});
