
function createEvent({ duration, title }, width, moveLeft, startMin) {
    let elEvent = window.document.createElement("div");
    elEvent.style.backgroundColor = "lightgreen";
    elEvent.style.width = width + "px";
    elEvent.style.height = `${duration * 2}px`;
    elEvent.style.marginLeft = "40px";
    elEvent.style.marginTop = `${startMin * 2}px`;    
    elEvent.style.borderLeft = "2px solid black"
    elEvent.style.position = "absolute";
    elEvent.style.zIndex = 5;
    elEvent.textContent = title;
    if (moveLeft) {
      elEvent.style.left = width + "px";
    }
    elEvent.style.cursor = "pointer";
    elEvent.classList.add("event");
    elEvent.addEventListener("click", () => {
      let isDelete = window.confirm("realy remove?");
      if (isDelete) {
        elEvent.remove();
      }
    });
  
    return elEvent;
  }
  
  
  document.getElementById("add").addEventListener("click", () => {
    let title = prompt("add some title");

    let start = prompt('add time(from)');

    let finish = prompt('add how time(to)'); 

    let id = start.split(":", 1)[0];

    let startMin = start.split(":", 2)[1];

    let finishMin = finish.split(":", 2)[1];

    let finishHour = finish.split(":", 2)[0];

    let hours = (finishHour-id) * 60;

    let minutes = finishMin-startMin ;

    let duration = hours + minutes;

    if (finishHour < id){
      hours = (24 - id) * 60;
      duration = hours-startMin;
    } 


    let finedSection = window.document.getElementById(id);
    let childEvents = finedSection.getElementsByClassName("event"); 
    let width = 318 ;
    let moveLeft = false;
    if (childEvents.length > 0) {
      moveLeft = true;
      for (let child of childEvents) {
        let currentWith = child.style.width; 
        let widthCal = currentWith.slice(0, currentWith.length -2  );
        width = widthCal / 2;
        child.style.width = `${widthCal / 2}px`;
      }
    }
  
    let newEvent = createEvent({ title, duration }, width, moveLeft, startMin);
    let elem = window.document.getElementById(id); // start - string
    elem.appendChild(newEvent);
  });
  
