var DB2;
var first_name = document.getElementById("first_name");
var last_name = document.getElementById("last_name")
var email = document.getElementById("email");
var button = document.getElementById("button");
var input = document.querySelectorAll("input");
document.addEventListener("DOMContentLoaded", () => {
  let HomeGet = indexedDB.open("HomeGetDB", 1);

  console.log("101");
  HomeGet.onerror = function () {
    console.log("There was an error");
  };
  HomeGet.onsuccess = function () {
    DB2 = HomeGet.result;

    let objectStore = DB2.transaction("Agents").objectStore("Agents");

    console.log(objectStore);
    objectStore.openCursor().onsuccess = function (e) {
      e.preventDefault();
      console.log("we are here");
      button.onclick = function () {
        e.preventDefault();
        input[0].style.borderColor = "gray";
        input[1].style.borderColor = "gray";
        input[2].style.borderColor = "gray";
        if (
          (first_name.value == null || first_name.value == "") && (last_name.value==null || last_name.value == "") &&
          (email.value == null || email.value == "")
        ) {
          first_name.placeholder = "PLEASE ENTER YOUR FIRST NAME";
          last_name.placeholder = "PLEASE ENTER YOUR LAST NAME";
          email.placeholder = "PLEASE ENTER YOUR EMAIL";
          input[0].style.borderColor = "red";
          input[1].style.borderColor = "red";
          input[2].style.borderColor = "red";

        } else if (first_name.value == null || first_name.value == "") {
          first_name.placeholder = "PLEASE ENTER YOUR FIRST NAME";
          input[0].style.borderColor = "red";
        }else if (last_name.value == null || last_name.value == "") {
          last_name.placeholder = "PLEASE ENTER YOUR LAST NAME";
          input[1].style.borderColor = "red";
        }
         else if (email.value == null || email.value == "") {
          email.placeholder = "PLEASE ENTER YOUR EMAIL";
          input[2].style.borderColor = "red";
        } else {
          console.log("there was an error");
        }
      };
    };
  };
});
