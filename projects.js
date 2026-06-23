const container = document.querySelector(".container");

const projects = [
{ name: "bulb", tag: "Practice", status: "Open" , path: 'projects/bulb/'}, 
{name: "todo list", tag: "Task", status: "Open", path: "projects/todo/"},
{name: "user card", tag: "Task", status: "Open", path: "projects/createCard/"},
{name: "random box game", tag: "Task", status: "Open", path: "projects/randomBoxGame"},
{name: "task Management", tag: "assignment", status: "open", path: "projects/taskMagement"},
{ name: "React 1", tag: "Task", status: "open", path: "React/react1/dist/" } 
 ];

projects.forEach(({name, tag, status, path}) => {
  const section = document.createElement("section");
  section.classList.add("section");
  const cards = document.createElement("div");
  cards.classList.add("cards");
 
  cards.innerHTML = `
         <a class="card " href=${path} target="_blank">
            <span class="badge general ${tag}">${tag}</span>
            <p class="card-title">${name} </p>
            <p class="card-arrow">${status}</p>
          </a>

    `;
  section.append(cards);
  container.append(section);
});
