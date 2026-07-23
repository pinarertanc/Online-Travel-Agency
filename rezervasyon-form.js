const urlParams = new URLSearchParams(window.location.search);  
const selectedTour = urlParams.get("lokasyon");

const ACTIVE_TOUR = TOUR_DATA[selectedTour];

window.addEventListener("DOMContentLoaded", ()=> {

const summaryDate = document.getElementById("summaryDate");
const summaryAdult = document.getElementById("summaryAdult");
const summaryKid1 = document.getElementById("summaryKid1");
const summaryKid2 = document.getElementById("summaryKid2");
const summaryTotal = document.getElementById("summaryTotal");
const summaryTourName = document.getElementById("summaryTourName");

const savedState = localStorage.getItem(`res_${selectedTour}`);

if(savedState && ACTIVE_TOUR){
  const data = JSON.parse(savedState);


if (summaryTourName) summaryTourName.textContent = ACTIVE_TOUR.name;
if (summaryDate) summaryDate.textContent = "Tur Tarihi: " + data.date;
if (summaryAdult) summaryAdult.textContent = "1.Oda: " + data.adult;
if (summaryKid1) summaryKid1.textContent = "Çocuk 1: " + data.kid1;
if (summaryKid2) summaryKid2.textContent = "Çocuk 2: " + data.kid2;

const adultPrice = ACTIVE_TOUR.prices.Adult[data.adult] || 0;
const kid1Price = ACTIVE_TOUR.prices.Child[data.kid1] || 0;
const kid2Price = ACTIVE_TOUR.prices.Child[data.kid2] || 0;

if (summaryTotal) summaryTotal.textContent = `Toplam: ${adultPrice + kid1Price + kid2Price} TL`;
  }

const invoiceRadioBox = document.getElementById("InvoiceInformation");
const invoiceInformationContainer = document.getElementById("invoice-container");
invoiceRadioBox.addEventListener("change", ()=>{
 if (invoiceRadioBox.checked){
  invoiceInformationContainer.classList.remove("hidden");
 }
})
  
});

