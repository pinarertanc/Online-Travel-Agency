const toursContainer = document.querySelector("#turlarimiz");

function createTourCards (){

  toursContainer.innerHTML = TOUR_DATA.map(tour =>{
    const priceText = tour.prices.Adult["2 Yetişkin"] / 2;

    return `
    <div>
          <picture>
            <source media="(min-width: 1024px)" srcset="${tour.images.desktop}" />
            <source media="(min-width: 768px)" srcset="${tour.images.tablet}" />
            <img class="portreit-image" src="${tour.images.mobile}" alt="${tour.name}"/>
          </picture>
          <div class="purchaseDiv flex-column">
            <div>
              <h3 class="marginZero">${tour.name}</h3>
              <p class="marginZero">
                <i class="fa-solid fa-location-dot"></i>${tour.country}
              </p>
            </div>
            <div class="flex-row space-between">
              <a
                class="button button--reservation"
                href="tur-detay.html?id=${tour.id}"
                >REZERVASYON YAP</a
              >
              <h4 class="marginZero">${priceText} TL</h4>
            </div>
          </div>
        </div>
    `
  }).join("")
}

document.addEventListener("DOMContentLoaded", createTourCards);