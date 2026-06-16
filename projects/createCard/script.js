const form = document.querySelector("form");
const cardsContainer = document.querySelector(".cardsContainer");
const createCardBtn = document.querySelector("#createCard");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const imageInput = document.querySelector("#image");

const save = document.createElement("button");
save.setAttribute("type", "button");

let isEdit = false;
const allCards = [
  {
    id: 0,
    name: "avusala chetan",
    email: "avusalachetan@gmail.com",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4TmanH98DwseuESbmGWdB7ozgvhu4xIfwfw&s",
    createdAt: new Date().toLocaleString(),
  },
];

const createCard = () => {
  cardsContainer.innerHTML = "";
  allCards.forEach((ele, i) => {
    const {name, email, image, id, createdAt} = ele;
    cardsContainer.innerHTML += ` 
            <div class="card">

     <div class='cardHeader'>
        <img src=${image} alt="img" />
        <div class="btnContainer">
           <button onclick='edit(${i})' id='edit'>edit</button>
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

const edit = function (i) {
  isEdit = true;

  const card = allCards[i];

  nameInput.value = card.name;
  emailInput.value = card.email;
  imageInput.value = card.image;

  createCardBtn.remove();
  save.textContent = "save";
  form.append(save);

  save.addEventListener("click", (e) => {
    allCards.splice(i, 4, {
      id: i,
      name: nameInput.value,
      email: emailInput.value,
      image: imageInput.value,
      createdAt: `edited - ${new Date().toLocaleDateString()} 
      ${new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}`,
    });
    createCard();
    isEdit = false;
    form.reset()
  });
 
};

createCard();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!nameInput.value || !emailInput.value || !imageInput.value) {
    const err = document.createElement("p");
    err.classList.add("err");
    err.textContent = "give input";
    document.body.prepend(err);
    return;
  }

  if (!isEdit) {
    allCards.push({
      id: allCards.length + 1,
      name: nameInput.value,
      email: emailInput.value,
      image: imageInput.value,
      createdAt: new Date().toLocaleString(),
    });
  }

  createCard();
  console.log(allCards);

  form.reset();
});
