const container = document.querySelector(".main-container-div");
var DB;

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
  };

  function displayAgent() {
    // clear the previous task list
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // create the object store
    let objectStore = DB.transaction("Agents").objectStore("Agents");

    objectStore.openCursor().onsuccess = function (e) {
      // assign the current cursor
      let cursor = e.target.result;

      if (cursor) {
        const cardHolder = document.createElement("div");
        cardHolder.classList = "card-holder col-md-4 m-3 m-md-0 p-0";
        const card = document.createElement("div");
        card.className = "card m-2";
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        const agentImgHolder = document.createElement("div");
        agentImgHolder.classList = "d-flex justify-content-center";
        const agentImg = document.createElement("img");
        agentImg.setAttribute("src", cursor.value.AgentProfilePhoto);
        agentImg.className = "agent-img";
        const agentName = document.createElement("h5");
        agentName.className = "card-title agent-name";
        agentName.innerText = cursor.value.AgentName;
        const workPlace = document.createElement("p");
        workPlace.classList = "work-place";
        workPlace.innerText = cursor.value.AgentOfficeAddress;
        const line = document.createElement("hr");
        const agentEmail = document.createElement("p");
        agentEmail.className = "card-text d-flex justify-content-center";
        agentEmail.innerText = cursor.value.AgentEmail;
        const phoneNumber = document.createElement("p");
        phoneNumber.className = "card-text d-flex justify-content-center";
        phoneNumber.innerText = cursor.value.AgentMobileNUmber;
        const listingBtn = document.createElement("div");
        listingBtn.className = "btn agent-btn pb-0";
        listingBtn.style.width = "100%";
        const linkID = document.createElement("p");
        linkID.innerText = cursor.value.AgentID;
        listingBtn.onclick = function () {
          window.open("agent-detail.html?" + linkID.innerText);
        };
        const agentBtnInfoHolder = document.createElement("div");
        agentBtnInfoHolder.className =
          "row agent-btn-holder d-flex justify-content-center";
        const listingAmount = document.createElement("div");

        const listingP = document.createElement("div");
        listingP.innerText = "listing Properties";

        agentImgHolder.appendChild(agentImg);
        cardBody.appendChild(agentImgHolder);
        cardBody.appendChild(agentName);
        cardBody.appendChild(workPlace);
        cardBody.appendChild(line);
        cardBody.appendChild(agentEmail);
        cardBody.appendChild(phoneNumber);
        agentBtnInfoHolder.appendChild(listingAmount);
        agentBtnInfoHolder.appendChild(listingP);
        listingBtn.appendChild(agentBtnInfoHolder);
        cardBody.appendChild(listingBtn);
        card.appendChild(cardBody);
        cardHolder.appendChild(card);
        container.appendChild(cardHolder);

        cursor.continue();
      }
    };
  }
});
