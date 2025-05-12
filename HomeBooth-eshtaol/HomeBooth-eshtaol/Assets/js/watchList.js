// customer personal info variables
const customerNameLink = document.querySelector(".customer-name-link");
const customerName = document.querySelector(".customer-name");
const customerMobileNumber = document.querySelector("#customer-mobile-number");
const customerOfficeNumber = document.querySelector("#customer-office-number");
const customerEmail = document.querySelector("#customer-email");
const customerOfficeAddress = document.querySelector(
  "#customer-office-address"
);
const customerProfilePhoto = document.querySelector(".customer-pic");

// customer listing and detail review info variables
const customerListingListHolder = document.querySelector(
  ".customer-listing-list-holder"
);

var listings;
var DB1;

// Add Event Listener [on Load]
document.addEventListener("DOMContentLoaded", () => {
  // create the database
  let HomeGet = indexedDB.open("HomeGetDB", 1);

  // if there's an error
  HomeGet.onerror = function () {
    console.log("There was an error");
  };
  // if everything is fine, assign the result to the instance
  HomeGet.onsuccess = function () {
    // console.log('Database Ready');

    // save the result
    DB1 = HomeGet.result;

    // display
    displayCustomer();
  };

  function displayCustomerListing() {
    var transaction1 = DB1.transaction(["Property"]);
    listingStore = transaction1.objectStore("Property");

    listingStore.openCursor().onsuccess = function (e) {
      let cursor = e.target.result;

      if (cursor) {
        if (cursor.value.HomeAddress in listings) {
          const listCard = document.createElement("div");
          listCard.className = "card m-md-5 p-4 m-2";
          listCard.style.boxShadow = "0 1rem 4rem rgb(0 0 0 / 20%)";
          const listCardHolder = document.createElement("div");
          listCardHolder.className = "row";
          const listCardPhotoHolder = document.createElement("div");
          listCardPhotoHolder.classList = "listing-property-pic col-md";
          const listCardPhoto = document.createElement("img");
          listCardPhoto.setAttribute("src", "./Assets/img/house 2.jpg");
          listCardPhoto.style.width = "100%";
          listCardPhoto.style.borderRadius = "5px";
          const listCardInfoHolder = document.createElement("div");
          listCardInfoHolder.classList = "listing-property-info col-md row";

          // property basic info
          const listCardName = document.createElement("h5");
          listCardName.classList = "col-12";
          listCardName.innerText = cursor.value.PropertyName;

          const listCardAddress = document.createElement("p");
          listCardAddress.classList = "col-12";
          listCardAddress.innerText =
            cursor.value.HomeAddress +
            " " +
            cursor.value.PropertyStreetNumber +
            ", " +
            cursor.value.PropertySubCity +
            ", " +
            cursor.value.PropertyAreaSpecialName;

          var payment = 0;
          const listCardPayment = document.createElement("p");
          listCardPayment.classList = "col-12";
          listCardPayment.innerText =
            "$" + cursor.value.PropertyFee + " / month";
          // property basic features
          const basicFeaturesHolder = document.createElement("div");
          basicFeaturesHolder.classList = "row col-12";

          const listCardBedRoomsNumber = document.createElement("p");
          listCardBedRoomsNumber.classList = "col-md";
          listCardBedRoomsNumber.innerHTML =
            '<i class="fas fa-bed"></i> ' + cursor.value.BedRooms;

          const listCardBathRoomsNumber = document.createElement("p");
          listCardBathRoomsNumber.classList = "col-md";
          listCardBathRoomsNumber.innerHTML =
            '<i class="fas fa-shower"></i>' + cursor.value.Bathrooms;

          const listCardLandSize = document.createElement("p");
          listCardLandSize.classList = "col-md";
          listCardLandSize.innerHTML =
            '<i class="fas fa-ruler-combined"></i>' + cursor.value.PropertySize;

          basicFeaturesHolder.appendChild(listCardBedRoomsNumber);
          basicFeaturesHolder.appendChild(listCardBathRoomsNumber);
          basicFeaturesHolder.appendChild(listCardLandSize);

          listCardPhotoHolder.appendChild(listCardPhoto);
          listCardHolder.appendChild(listCardPhotoHolder);

          listCardInfoHolder.appendChild(listCardName);
          listCardInfoHolder.appendChild(listCardAddress);
          listCardInfoHolder.appendChild(listCardPayment);
          listCardInfoHolder.appendChild(basicFeaturesHolder);
          listCardHolder.appendChild(listCardInfoHolder);
          listCard.appendChild(listCardHolder);
          agentListingListHolder.appendChild(listCard);
        }
        cursor.continue();
      }
    };
  }

  function displayCustomer() {
    
    var transaction = DB1.transaction(["Customer"]);
    var objectStore = transaction.objectStore("Customer");
    // var request = objectStore.get(customerID);

    objectStore.openCursor().onsuccess = function (e) {
      // assign the current cursor
      let cursor = e.target.result;

      if (cursor) {
        if (cursor.value.customerID == currentUserProfile) {
          customerNameLink.innerText = cursor.value.customerName;
          customerName.firstElementChild.innerText = cursor.value.customerName;
          customerMobileNumber.innerText = cursor.value.customerMobileNUmber;
          customerOfficeNumber.innerText =
            cursor.value.customerOfficePhoneNumber;
          customerEmail.innerText = cursor.value.customerEmail;
          customerOfficeAddress.innerText = cursor.value.customerOfficeAddress;

          customerProfilePhoto.setAttribute(
            "src",
            cursor.value.customerProfilePhoto
          );
          let watchList = cursor.value.watchListPropertyID;
          let feature1 = "";
          let fe = "";
          for (let i = 0; i < features.length; i++) {
            if (features[i] == "@") {
              fe = feature1;
              listings.push(fe);
              feature1 = "";
            } else {
              feature1 += features[i];
            }
          }
        }
        cursor.continue();
      }
    };
  }
});
