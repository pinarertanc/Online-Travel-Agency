const urlParams = new URLSearchParams(window.location.search);  
const selectedTour = urlParams.get("lokasyon");

if(!selectedTour || !TOUR_DATA[selectedTour]){
  window.location.href="turlarimiz.html";
}

const ACTIVE_TOUR = TOUR_DATA[selectedTour];

const summaryDate = document.getElementById("summaryDate");
const summaryAdult = document.getElementById("summaryAdult");
const summaryKid1 = document.getElementById("summaryKid1");
const summaryKid2 = document.getElementById("summaryKid2");
const summaryTotal = document.getElementById("summaryTotal");
const summaryTourName = document.getElementById("summaryTourName");


const selectedDate = document.getElementById("date-select");
const selectedAdult = document.getElementById("adult-select");
const selectedKid1 = document.getElementById("kid1-select");
const selectedKid2 = document.getElementById("kid2-select");
const tableBody = document.getElementById("dynamic-table-body");


window.addEventListener("DOMContentLoaded", ()=>{
  ACTIVE_TOUR.dates.forEach((dateObj)=>{
    const option = document.createElement("option");
    option.value = dateObj.text;

    if(dateObj.quota === 0){
      option.textContent = `${dateObj.text} (KONTENJAN DOLU)`;
      option.disabled = true;
    } else {
      option.textContent = dateObj.text;
    }
    selectedDate.appendChild(option);
});

const savedState = localStorage.getItem(`res_${selectedTour}`);

if(savedState){
    const data = JSON.parse(savedState);
    selectedDate.value = data.date || " ";
    selectedAdult.value = data.adult || "1 Yetişkin";
    selectedKid1.value = data.kid1 || "Yok";
    selectedKid2.value = data.kid2 || "Yok";
  }

 ACTIVE_TOUR.dates.forEach((dateObj) => {
    const dateArray = dateObj.text.split("-");
    const girisTarihi = dateArray[0];
    const cikisTarihi = dateArray[1];
    const tekKisilikOdaFiyati = ACTIVE_TOUR.prices.Adult["1 Yetişkin"];
    const ciftKisilikOdaFiyatiKisiBası = ACTIVE_TOUR.prices.Adult["2 Yetişkin"]/2;

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${girisTarihi}</td> 
      <td>${cikisTarihi}</td>
      <td>${dateObj.quota}</td>  
      <td>${tekKisilikOdaFiyati} TL</td>
      <td>${ciftKisilikOdaFiyatiKisiBası} TL</td>
      `;
    
    tableBody.appendChild(row);

});
updateSummary();
getTotalPrice();
});

function updateSummary(){
  summaryDate.textContent = "Tur Tarihi: " + selectedDate.value;
  summaryAdult.textContent = "1.Oda: " + selectedAdult.value;
  summaryKid1.textContent = "Çocuk 1: " + selectedKid1.value;
  summaryKid2.textContent = "Çocuk 2: " + selectedKid2.value;
  summaryTourName.textContent = ACTIVE_TOUR.name;
  saveToLocalStorage();
}

selectedDate.addEventListener("change", updateSummary); 
selectedAdult.addEventListener("change", updateSummary);
selectedKid1.addEventListener("change", updateSummary);
selectedKid2.addEventListener("change", updateSummary);


function getTotalPrice(){
  const adultPrice = ACTIVE_TOUR.prices.Adult[selectedAdult.value] || 0;
  const kid1Price = ACTIVE_TOUR.prices.Child[selectedKid1.value] || 0;
  const kid2Price = ACTIVE_TOUR.prices.Child[selectedKid2.value] || 0;

  const totalPrice = adultPrice + kid1Price + kid2Price;
  summaryTotal.textContent = `Toplam: ${totalPrice} TL`;

  saveToLocalStorage();
}

selectedAdult.addEventListener("change", getTotalPrice);
selectedKid1.addEventListener("change", getTotalPrice);
selectedKid2.addEventListener("change", getTotalPrice);


const tourProgram = document.getElementById("TourProgram");
tourProgram.innerHTML = "<h4 class='marginZero'>Tur Programı:</h4>";
for (const [day, activity] of Object.entries(ACTIVE_TOUR.Program)) {
  const p = document.createElement("p");
  p.textContent = `${day}: ${activity}`;
  p.classList.add("margin5");
  tourProgram.appendChild(p);
}

const desktopImage = document.getElementById("desktopImage");
const mediumImage = document.getElementById("mediumImage");
const smallImage = document.getElementById("smallImage");

desktopImage.src = ACTIVE_TOUR.Images.desktop;
mediumImage.srcset = ACTIVE_TOUR.Images.medium;
smallImage.srcset = ACTIVE_TOUR.Images.small;


function saveToLocalStorage() {
  const reservationState = {
    date: selectedDate.value,
    adult: selectedAdult.value,
    kid1: selectedKid1.value,
    kid2: selectedKid2.value
  };
  localStorage.setItem(`res_${selectedTour}`, JSON.stringify(reservationState));
}

const purchaseButton = document.getElementById("buttonPurchase");
purchaseButton.addEventListener("click",(e)=>{

  if(selectedDate.value !== "" && selectedAdult.value !== "" && selectedKid1.value !== "" && selectedKid2.value !== ""){
   purchaseButton.href =`rezervasyon-form.html?lokasyon=${selectedTour}`
  } else {
    alert("Lütfen tüm tercih alanlarının doldurulduğundan emin olun.");
  }
});

   