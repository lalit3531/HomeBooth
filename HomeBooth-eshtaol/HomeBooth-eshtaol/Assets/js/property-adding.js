const pname = document.querySelector("#propertyName");
const houseNumber = document.querySelector("#propertyNumber");
const streetNumber = document.querySelector("#streetNumber");
const specialName = document.querySelector("#specialName");
const fee = document.querySelector("#fee");
const landSize = document.querySelector("#propertyLandSize");
const size = document.querySelector("#propertySize");
const bed = document.querySelector("#bedrooms");
const bath = document.querySelector("#bathrooms");
const garages = document.querySelector("#garages");
const extra = document.querySelector("#extraRooms");
const img1 = document.querySelector("#externalPic")
const img2 = document.querySelector("#interPic1");
const img3 = document.querySelector("#interPic2");
const img4 = document.querySelector("#interPic3");
const features = document.querySelector("#features");
const message12 = document.querySelector("#message12");
const subcity = document.querySelector("#subcity");
const btype = document.querySelector("#btype");

const reg = document.querySelector("#reg")
var inImg = img2 + "~" + img3 + "~" + img4 + "~"
var feature1 = "";
var fe = "";
for (let i = 0; i < features.length; i++) {
  if (features[i] == ",") {
    fe = feature1; + "@";
    feature1 = "";
  } else {
    feature1 += features[i];
  }
}

let DB;

  let HomeGetDB = window.indexedDB.open("HomeGetDB", 1);
  HomeGetDB.onsuccess = function (event) {
    //code here
    console.log("database opened successfully");
    DB = HomeGetDB.result;
  };
  HomeGetDB.onerror = function (event) {
    // code here
    console.log("Error occurred");
  };

  function addNewProperty(e) {
    e.preventDefault(); //the rest of code
    // Add to DB
    let newProperty = {
      // validation
      PropertyName: pname.value ,
      HomeAddress: houseNumber.value,
      PropertySubCity: 3,
      PropertyStreetNumber: streetNumber.value,
      PropertyAreaSpecialName: specialName.value,
      PropertyType: 2,
      PropertyFee: fee.value,
      PropertySize: size.value,
      PropertyLandSize: landSize.value,
      Garages: garages.value,
      Bathrooms: bath.value,
      BedRooms: bed.value,
      ExtraRooms: extra.value,
      SpacialFeatures: fe,
      AgentName: "aa",
      PropertyDescription: message12.value,
      PropertyImg: inImg,
      InternalRoomsImg:2,

    };

    let transaction = DB.transaction(["Agents"], "readwrite");
    let objectStore = transaction.objectStore("Agents");
    let request = objectStore.add(newProperty);
    

    request.onsuccess = () => {
      console.log(1223);
    };
    transaction.oncomplete = () => {
      console.log("New property added");
    };
    transaction.onerror = () => {
      console.log("There was an error, try again!");
    };
    location.reload();
    // location.href = "agents.html"
  }

  reg.addEventListener("click", addNewProperty);