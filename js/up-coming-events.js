const cardsContainer = document.getElementById("upCaming");

function createCard(arrayEvents) {
  let cards = "";
  for (const event of arrayEvents) {
    if (Date.parse(event.date) > Date.parse(data.currentDate)) {
      cards += `<div class="card" style="width: 280px">
                <img src="${event.image}" class="card-img-top" alt="..." />
                 <div class="card-body">
                   <h5 class="card-title">${event.name}</h5>
                   <p class="card-category">${event.category}</p>
                   <p class="card-text">${event.description}</p>
                   <p class="card-place">Place: ${event.place}</p>
                   <a href="./details.html" class="btn btn-primary">More Info</a>
                 </div>
              </div> `;
    }
  }
  return cards;
}

let cardsEvents = createCard(data.events);

cardsContainer.innerHTML = cardsEvents;
