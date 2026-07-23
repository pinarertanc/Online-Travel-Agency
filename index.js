const populerToursRowContainer = document.querySelector("#populer-tour-list");

function createTourList (){
  const populerTours = TOUR_DATA.slice(0,3);

  populerToursRowContainer.innerHTML = populerTours.map(tour =>{
    const priceText = tour.prices.Adult["2 Yetişkin"] / 2;

    return `
    <div class="divider"></div>
    <div class="tour-row">
        <div>
          <picture>
            <source media="(min-width: 1024px)" srcset="${tour.images.desktop}" />
            <source media="(min-width: 768px)" srcset="${tour.images.tablet}" />
            <img class="square-image" src="${tour.images.mobile}" alt="${tour.name}" loading="lazy" />
          </picture>
        </div>

        <div class="tour-row-info">
          <h3 class="populer-tours-header2 marginZero">${tour.name}</h3>
          <p class="populer-tours-inner-text">${tour.info}</p>
          <p><i class="fa-solid fa-clock clock-icon"></i> ${tour.duration}</p>
        </div>

        <div class="populer-tours-price">
          <div>
            <h2 class="populer-tours-header2 marginZero">${priceText} TL</h2>
            <p class="populer-tours-inner-text">Kişi Başı</p>
          </div>    
          <div>
            <a class="secondary-button" href="tur-detay.html?id=${tour.id}">GÖZ AT</a>
            <i class="fa-solid fa-arrow-right arrow-icon"></i>
          </div>
        </div>
      </div>
    `;

  }).join('');
}

document.addEventListener('DOMContentLoaded', createTourList);