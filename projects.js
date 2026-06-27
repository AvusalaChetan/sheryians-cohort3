const container = document.querySelector(".container");

const projects = [
{ name: "bulb", tag: "Practice", status: "Open" , path: 'projects/bulb/'}, 
{name: "todo list", tag: "Task", status: "Open", path: "projects/todo/"},
{name: "user card", tag: "Task", status: "Open", path: "projects/createCard/"},
{name: "random box game", tag: "Task", status: "Open", path: "projects/randomBoxGame"},
{name: "task Management", tag: "assignment",dec:'a task manager where monitor tasks',  status: "open", path: "projects/taskMagement"},
{ name: "React 1", tag: "Task", dec:'first react project creation ', status: "open", path: "React/react1/dist/" } ,
{ name: "Text - Speech", tag: "pratice", dec:'text to speech ', status: "open", path: "React/react2/dist/" } ,
{ name: "partice dom ", tag: "Practice",dec:'practiced dom under "Ritik Rajput"', status: "Open" , path: 'pratice/dom'}, 
 ];

projects.forEach(({name, tag, status, path,dec}) => {
  const section = document.createElement("section");
  section.classList.add("section");
  const cards = document.createElement("div");
  cards.classList.add("cards");
 
  cards.innerHTML = `
         <a class="card " href=${path} target="_blank">
            <span class="badge general ${tag}">${tag}</span>
            <p class="card-title">${name} </p>
             <p class='dec'> ${dec?? ''} </p>
            <p class="card-arrow">${status}</p>
          </a>

    `;
  section.append(cards);
  container.append(section);
});
