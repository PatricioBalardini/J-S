const cardsContainer = document.getElementById("cards");

const filterForm = document.getElementById("form-filters");

const events = data.events;

function getFormData(form) {
  const formData = new FormData(form);
  return Object.fromEntries(formData);
}

filterForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = getFormData(e.target);
  const selectedCategories = Object.keys(formData).filter(
    (key) => key !== "searcher"
  );
  const searchValue = formData.searcher.toLowerCase().trim();
  const cardsFilter = events.filter((event) => {
    const isCategoryInclude = selectedCategories.length
      ? selectedCategories.includes(event.category)
      : true;
    return event.name.toLowerCase().includes(searchValue) && isCategoryInclude;
  });
  createCard(cardsFilter);
});

function createCard(arrayEvents) {
  cardsContainer.innerHTML = "";
  let cards = "";
  for (const event of arrayEvents) {
    cards += `<div class="card" style="width: 240px">
                <img src="${event.image}" class="card-img-top" alt="..." />
                 <div class="card-body">
                   <h5 class="card-title">${event.name}</h5>
                   <p class="card-category">${event.category}</p>
                   <p class="card-text">${event.description}</p>
                   <a href="./pages/details.html?id=${event.id}" class="btn btn-primary">More Info</a>
                 </div>
              </div> `;
  }
  cardsContainer.innerHTML = cards;
}

createCard(events);

// if(selectedCategory.length) {
//   isCategoryIncluded = selectedCategories.includes(event.category);
// } else {
// isCategoryIncluded = true;
// }

//FormData(): permiten compilar un conjunto de pares clave/valor para enviar mediante XMLHttpRequest.
//Object.fromEntries(): transforma una lista de pares con [clave-valor] en un objeto.
//Object.keys(): devuelve un arreglo de propiedades enumerables propias de un objeto dado.
//Event.target: es una referencia al objeto en el cual se lanzo el evento.
//
