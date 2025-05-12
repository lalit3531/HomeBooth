const listHolder = document.querySelector(".list-holder");

var DB;

document.addEventListener("DOMContentLoaded", () => {
  let HomeGet = indexedDB.open("HomeGetDB", 1);

  HomeGet.onerror = function () {
    console.log("Database unaccessible");
  };
  HomeGet.onsuccess = function () {
    DB = HomeGet.result;

    displayProperty();
  };

  function displayProperty() {
    while (listHolder.firstChild) {
      listHolder.removeChild(listHolder.firstChild);
    }

    let objectStore = DB.transaction("Property").objectStore("Property");

    objectStore.openCursor().onsuccess = function (e) {
      let cursor = e.target.result;

      if (cursor) {
        const houseList = document.createElement("div");
        houseList.classList = "houseList";
        const houseImg = document.createElement("div");
        houseImg.classList = "houseImg";
        const imgLinkHolder = document.createElement("a");
        imgLinkHolder.onclick = function () {
          window.location.href = "rent.html?" + cursor.value.HomeAddress;
        };
        const imgLink = document.createElement("img");
        imgLink.setAttribute("src", cursor.value.PropertyImg);

        const houseDetail = document.createElement("div");
        houseDetail.classList = "houseDetail ml-5";
        const houseHeader = document.createElement("h5");
        houseHeader.classList = "houseHeader";
        houseHeader.innerText = cursor.value.PropertyName;
        const houseAddress = document.createElement("p");
        houseAddress.classList = "h6 mb-3 ml-4";
        houseAddress.innerText =
          cursor.value.HomeAddress +
          " " +
          cursor.value.PropertyStreetNumber +
          ", " +
          cursor.value.PropertySubCity +
          ", " +
          cursor.value.PropertyAreaSpecialName;
        const houseDescription = document.createElement("p");
        houseDescription.className = "houseDescription";
        houseDescription.innerText = cursor.value.PropertyDescription;

        const housePrice = document.createElement("p");
        housePrice.setAttribute("id", "price");
        housePrice.innerText = cursor.value.PropertyFee + " / month";

        const featureHolder = document.createElement("div");
        featureHolder.className = "row";

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

        imgLinkHolder.appendChild(imgLink);
        houseImg.append(imgLinkHolder);
        houseList.appendChild(houseImg);
        houseDetail.appendChild(houseHeader);
        houseDetail.appendChild(houseAddress);
        houseDetail.appendChild(houseDescription);
        houseDetail.appendChild(housePrice);
        featureHolder.appendChild(listCardBedRoomsNumber);
        featureHolder.appendChild(listCardBathRoomsNumber);
        featureHolder.appendChild(listCardLandSize);
        houseDetail.appendChild(featureHolder);
        houseList.appendChild(houseDetail);
        listHolder.appendChild(houseList);

        cursor.continue();
      }
    };
  }
});
