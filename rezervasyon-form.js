const urlParams = new URLSearchParams(window.location.search);  
const selectedTour = urlParams.get("id");

const ACTIVE_TOUR = TOUR_DATA ? TOUR_DATA.find(tour => tour.id === selectedTour) : null;

window.addEventListener("DOMContentLoaded", ()=> {

  const VALIDATION_PATTERNS = {
  
    nameSurname: /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]{2,}$/,
    
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

    phone: /^(05|5)[0-9]{9}$/,

    tcNo: /^[1-9][0-9]{10}$/,

    taxNo: /^[0-9]{10}$/
  };

  function validateField(inputElement, pattern, errorMessage) {
    if (!inputElement) return true;

    const value = inputElement.value.trim();
   
    const parentDiv = inputElement.closest("div");
  if (!parentDiv) return true;

  let errorContainer = parentDiv.nextElementSibling;
  let isContainerCreated = false;

  if (errorContainer && errorContainer.classList.contains("error-container")) {
    isContainerCreated = true;
  }

  if (!isContainerCreated) {
    errorContainer = document.createElement("div");
    errorContainer.className = "error-container";

    const errorSpan = document.createElement("span");
    errorSpan.className = "error-message";
    errorSpan.style.cssText = "color: #d9534f; font-size: 12px; margin-top: 4px; display: block; font-weight: 600;";

    errorContainer.appendChild(errorSpan);

    parentDiv.insertAdjacentElement("afterend", errorContainer);
  }
  const errorSpan = errorContainer.querySelector(".error-message");

    
    if (value.length > 0 && !pattern.test(value)) {
    inputElement.style.borderColor = "#d9534f";
    if (errorSpan) errorSpan.textContent = errorMessage;
    return false;
  } else {
    inputElement.style.borderColor = "";
    if (errorSpan) errorSpan.textContent = "";
    return true;
  }
  }  

const summaryDate = document.getElementById("summaryDate");
const summaryAdult = document.getElementById("summaryAdult");
const summaryKid1 = document.getElementById("summaryKid1");
const summaryKid2 = document.getElementById("summaryKid2");
const summaryTotal = document.getElementById("summaryTotal");
const summaryTourName = document.getElementById("summaryTourName");

const guest2InfoContainer = document.getElementById("guest2Info");
const guest3InfoContainer = document.getElementById("guest3Info");

const summaryGuest2Info = document.getElementById("summaryGuest2");
const summaryGuest3Info = document.getElementById("summaryGuest3");

const savedState = localStorage.getItem(`res_${selectedTour}`);

if(savedState && ACTIVE_TOUR){
  const data = JSON.parse(savedState);


if (summaryTourName) summaryTourName.textContent = ACTIVE_TOUR.name;
if (summaryDate) summaryDate.textContent = "Tur Tarihi: " + data.date;
if (summaryAdult) summaryAdult.textContent = "1 Oda: " + data.adult;
if (summaryKid1) summaryKid1.textContent = "Çocuk 1: " + data.kid1;
if (summaryKid2) summaryKid2.textContent = "Çocuk 2: " + data.kid2;

const adultPrice = ACTIVE_TOUR.prices.Adult[data.adult] || 0;
const kid1Price = ACTIVE_TOUR.prices.Child[data.kid1] || 0;
const kid2Price = ACTIVE_TOUR.prices.Child[data.kid2] || 0;

if (summaryTotal) summaryTotal.textContent = `Toplam: ${adultPrice + kid1Price + kid2Price} TL`;

if(summaryAdult.textContent === "1 Oda: 3 Yetişkin" || summaryAdult.textContent === "1 Oda: 2 Yetişkin"){
  guest2InfoContainer.classList.remove("hidden");
  summaryGuest2Info.classList.remove("hidden");
};

if(summaryAdult.textContent === "1 Oda: 3 Yetişkin"){
  guest2InfoContainer.classList.remove("hidden");
  guest3InfoContainer.classList.remove("hidden");
  summaryGuest2Info.classList.remove("hidden");
  summaryGuest3Info.classList.remove("hidden");

};
  }

 const guestIndex = [1,2,3];

 guestIndex.forEach((num) =>{
  const nameInput = document.getElementById(`guest${num}Name`);
  const surnameInput = document.getElementById(`guest${num}Surname`);
  const summaryInfo = document.getElementById(`summaryGuest${num}`);
  const tcInput = document.getElementById(`guest${num}Tc`);

  function updateSummaryGuestInfo(){
    const name = nameInput? nameInput.value.trim():"";
    const surname = surnameInput? surnameInput.value.trim():"";

    let isNameValid = true;
      let isSurnameValid = true;

      if (nameInput) {
        isNameValid = validateField(nameInput, VALIDATION_PATTERNS.nameSurname, "Lütfen sadece harf giriniz (en az 2 karakter).");
      }
      if (surnameInput) {
        isSurnameValid = validateField(surnameInput, VALIDATION_PATTERNS.nameSurname, "Lütfen sadece harf giriniz (en az 2 karakter).");
      }

    if (summaryInfo) {
        if ((name.length > 0 || surname.length > 0) && isNameValid && isSurnameValid) {
          summaryInfo.textContent = `${num} Yetişkin isim: ${name} ${surname}`;
        } else {
          summaryInfo.textContent = `${num} Yetişkin isim: -`;
        }
      }
      
  }

  nameInput?.addEventListener("input", updateSummaryGuestInfo);
  surnameInput?.addEventListener("input", updateSummaryGuestInfo);
  updateSummaryGuestInfo();

  tcInput?.addEventListener("input", () => {
      validateField(tcInput, VALIDATION_PATTERNS.tcNo, "Geçerli bir T.C. Kimlik Numarası giriniz (11 hane).");
    });

 }
);

  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const tcInput = document.getElementById("idnumber");
  const taxNoInput = document.getElementById("taxno"); 
  const contactNameInput = document.getElementById("contactname");
  const contactSurnameInput = document.getElementById("contactsurname");
  const contactEmailInput = document.getElementById("contactemail");
  const contactPhoneNumber = document.getElementById("contactphone");

  emailInput?.addEventListener("input", () => {
    validateField(emailInput, VALIDATION_PATTERNS.email, "Geçerli bir e-posta adresi giriniz (Örn: ahmet@gmail.com).");
  });

  phoneInput?.addEventListener("input", () => {
    validateField(phoneInput, VALIDATION_PATTERNS.phone, "Geçerli bir telefon numarası giriniz (Örn: 05XXXXXXXXX).");
  });

  tcInput?.addEventListener("input", () => {
    validateField(tcInput, VALIDATION_PATTERNS.tcNo, "TC Kimlik No 11 haneli sayı olmalıdır.");
  });

  taxNoInput?.addEventListener("input", () => {
    validateField(taxNoInput, VALIDATION_PATTERNS.taxNo, "Vergi Numarası 10 haneli sayı olmalıdır.");
  });

  contactNameInput.addEventListener("input", ()=>{
    validateField(contactNameInput, VALIDATION_PATTERNS.nameSurname, "Lütfen sadece harf giriniz (en az 2 karakter).")
  });

  contactSurnameInput.addEventListener("input", ()=>{
    validateField(contactSurnameInput, VALIDATION_PATTERNS.nameSurname, "Lütfen sadece harf giriniz (en az 2 karakter).")
  });

  contactEmailInput.addEventListener("input", ()=>{
    validateField(contactEmailInput, VALIDATION_PATTERNS.email, "Geçerli bir e-posta adresi giriniz (Örn: ahmet@gmail.com).")
  });

  contactPhoneNumber.addEventListener("input", ()=>{
    validateField(contactPhoneNumber, VALIDATION_PATTERNS.phone, "Geçerli bir telefon numarası giriniz (Örn: 05XXXXXXXXX).")
  });

 const invoiceCheckBox = document.getElementById("InvoiceInformation");
 const invoiceInformationContainer = document.getElementById("invoice-container");
 invoiceCheckBox.addEventListener("change", ()=>{
 if (invoiceCheckBox.checked){
  invoiceInformationContainer.classList.remove("hidden");
 } else {
  invoiceInformationContainer.classList.add("hidden");
 }
});


const purchaseButton = document.getElementById("buttonPurchase");

purchaseButton.addEventListener("click",(e)=>{
   e.preventDefault();

   const visibleInputs = Array.from(
        document.querySelectorAll(".contact-info-container input")
      ).filter((input) => {
        return !input.closest(".hidden");
      });

      let hasEmptyField = false;
      let firstEmptyInput = null;

      visibleInputs.forEach((input) => {
        if (input.type !== "radio" && input.type !== "checkbox") {
          const value = input.value.trim();

          if (value === "") {
            hasEmptyField = true;
            input.style.borderColor = "#d9534f";

            if (!firstEmptyInput) {
              firstEmptyInput = input;
            }
          } else {
            input.style.borderColor = "";
          }
        }
      });

      if (hasEmptyField) {
        alert("Lütfen formu tamamlamak için tüm zorunlu alanları doldurunuz!");
        
        if (firstEmptyInput) {
          firstEmptyInput.focus();
          firstEmptyInput.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else {
        alert("Rezervasyonunuz başarıyla oluşturuldu! Ödeme sayfasına yönlendiriliyorsunuz.");

      }
    });
  });

