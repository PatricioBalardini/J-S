const cardsContainer = document.getElementById("upCaming");

const dateEventsUpCaming = events.filter(
  (cardDate) => cardDate.date > "2022 - 09 - 01"
);

function createCard(arrayEvents) {
  let cards = "";
  for (const event of arrayEvents) {
    cards += `<div class="card" style="width: 280px">
                <img src="${event.image}" class="card-img-top" alt="..." />
                 <div class="card-body">
                   <h5 class="card-title">${event.name}</h5>
                   <p class="card-category">${event.category}</p>
                   <p class="card-text">${event.description}</p>
                   <p class="card-date">Date: ${event.date}</p>
                   <p class="card-place">Place: ${event.place}</p>
                   <p class="card-capacity">Capacity: ${event.capacity}</p>
                   <p class="card-estimate">Estimate: ${event.assistance}</p>
                   <p class="card-price">$ ${event.price}</p>
                   <a href="./details.html" class="btn btn-primary">More Info</a>
                 </div>
              </div> `;
  }
  return cards;
}

let cardsEvents = createCard(dateEventsUpCaming);

cardsContainer.innerHTML = cardsEvents;