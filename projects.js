const container = document.querySelector(".container");

const projects = [
{ name: "bulb", tag: "Practice", status: "Open" , path: 'projects/bulb/'}, 
{name: "todo list", tag: "Task", status: "Open", path: "projects/todo/"},
 
 ];

projects.forEach(({name, tag, status, path}) => {
  const section = document.createElement("section");
  section.classList.add("section");
  const cards = document.createElement("div");
  cards.classList.add("cards");
 
  cards.innerHTML = `
         <a class="card" href=${path} target="_blank">
            <span class="badge easy">${tag}</span>
            <p class="card-title">${name.toUpperCase()} </p>
            <p class="card-arrow">${status}</p>
          </a>

    `;
  section.append(cards);
  container.append(section);
});
