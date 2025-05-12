// agent personal info variables
const agentNameLink = document.querySelector(".agent-name-link");
const agentName = document.querySelector(".agent-name");
const agentDescription = document.querySelector("#one-line-description");
const agentMobileNumber = document.querySelector("#agent-mobile-number");
const agentOfficeNumber = document.querySelector("#agent-office-number");
const agentEmail = document.querySelector("#agent-email");
const agentOfficeAddress = document.querySelector("#agent-office-address");
const agentProfilePhoto = document.querySelector(".agent-pic");
const ratingsNumber = document.querySelector("#ratings-number");
const facebookLink = document.querySelector(".fa-facebook-f");
const telegramLink = document.querySelector(".fa-telegram");

// agent listing and detail review info variables
const agentListingListHolder = document.querySelector(
  ".agent-listing-list-holder"
);

// agent rating info variables
const averageRating = document.querySelector("#average-ratings");
const ratingStarsList = document.querySelectorAll(".star-clickable");
const bar5 = document.querySelector(".bar-5");
const bar4 = document.querySelector(".bar-4");
const bar3 = document.querySelector(".bar-3");
const bar2 = document.querySelector(".bar-2");
const bar1 = document.querySelector(".bar-1");

const bar5Percent = document.querySelector(".star-5-percent");
const bar4Percent = document.querySelector(".star-4-percent");
const bar3Percent = document.querySelector(".star-3-percent");
const bar2Percent = document.querySelector(".star-2-percent");
const bar1Percent = document.querySelector(".star-1-percent");

for (let i = 0; i < ratingStarsList.length; i++) {
  ratingStarsList[i].onclick = function () {
    for (let j = 0; j < i + 1; j++) {
      ratingStarsList[j].className += " fa star-clicked";
    }
  };
}

// const urlParams = new URLSearchParams(window.location.search);
// const id = Number(urlParams.get("id"));

const IDa = location.search.substring(1);
//DB
var DB;

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
    DB = HomeGet.result;

    // display the Task
    displayAgent();
    setTimeout(() => {
      displayAgentListing();
    });
  };

  function displayAgent() {
    var transaction = DB.transaction(["Agents"]);
    var objectStore = transaction.objectStore("Agents");
    // var request = objectStore.get(AgentID);

    objectStore.openCursor().onsuccess = function (e) {
      // assign the current cursor
      let cursor = e.target.result;

      if (cursor) {
        if (cursor.value.AgentID == IDa) {
          agentNameLink.innerText = cursor.value.AgentName;
          agentName.firstElementChild.innerText = cursor.value.AgentName;
          agentDescription.innerText = cursor.value.oneLineDescription;
          agentMobileNumber.innerText = cursor.value.AgentMobileNUmber;
          agentOfficeNumber.innerText = cursor.value.AgentOfficePhoneNumber;
          agentEmail.innerText = cursor.value.AgentEmail;
          agentOfficeAddress.innerText = cursor.value.AgentOfficeAddress;

          if (cursor.value.Rating1 == undefined) {
            ratingsNumber.innerText = 0;
          } else {
            ratingsNumber.innerText =
              parseInt(cursor.value.Rating5) +
              parseInt(cursor.value.Rating4) +
              parseInt(cursor.value.Rating3) +
              parseInt(cursor.value.Rating2) +
              parseInt(cursor.value.Rating1);

            let TotalRating =
              5 * parseInt(cursor.value.Rating5) +
              4 * parseInt(cursor.value.Rating4) +
              3 * parseInt(cursor.value.Rating3) +
              2 * parseInt(cursor.value.Rating2) +
              1 * parseInt(cursor.value.Rating1);

            let average = TotalRating / parseInt(ratingsNumber.innerText);
            const stars2 = document.querySelectorAll(".pro-star");
            for (let i = 0; i < average; i++) {
              stars2[i].className += " star-clicked";
            }
            averageRating.innerText = average;
            bar5.style.width =
              (parseInt(cursor.value.Rating5) * 100) /
                parseInt(ratingsNumber.innerText) +
              "%";
            bar5Percent.innerText = bar5.style.width;
            bar4.style.width =
              (parseInt(cursor.value.Rating4) * 100) /
                parseInt(ratingsNumber.innerText) +
              "%";
            bar4Percent.innerText = bar4.style.width;
            bar3.style.width =
              (parseInt(cursor.value.Rating3) * 100) /
                parseInt(ratingsNumber.innerText) +
              "%";
            bar3Percent.innerText = bar3.style.width;
            bar2.style.width =
              (parseInt(cursor.value.Rating2) * 100) /
                parseInt(ratingsNumber.innerText) +
              "%";
            bar2Percent.innerText = bar2.style.width;
            bar1.style.width =
              (parseInt(cursor.value.Rating1) * 100) /
                parseInt(ratingsNumber.innerText) +
              "%";
            bar1Percent.innerText = bar1.style.width;
          }

          agentProfilePhoto.setAttribute("src", cursor.value.AgentProfilePhoto);

          facebookLink.onclick = function () {
            window.open(cursor.value.AgentFacebookLink);
          };
          telegramLink.onclick = function () {
            window.open(cursor.value.AgentTelegramLink);
          };
        }
        cursor.continue();
      }
    };
  }

  function displayAgentListing() {
    var transaction1 = DB.transaction(["Property"]);
    listingStore = transaction1.objectStore("Property");

    listingStore.openCursor().onsuccess = function (e) {
      let cursor = e.target.result;

      if (cursor) {
        if (cursor.value.AgentName == agentName.firstElementChild.innerText) {
          const listCard = document.createElement("div");
          listCard.className = "card m-md-5 p-4 m-2";
          listCard.style.boxShadow = "0 1rem 4rem rgb(0 0 0 / 20%)";
          const listCardHolder = document.createElement("div");
          listCardHolder.className = "row";
          const listCardPhotoHolder = document.createElement("div");
          listCardPhotoHolder.classList = "listing-property-pic col-md";
          const listImgLink = document.createElement("a");
          listImgLink.onclick = function () {
            window.location.href = "rent.html?" + cursor.value.HomeAddress;
          };
          const listCardPhoto = document.createElement("img");
          listCardPhoto.setAttribute("src", cursor.value.PropertyImg);
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

          listImgLink.appendChild(listCardPhoto);
          listCardPhotoHolder.appendChild(listImgLink);
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
});
