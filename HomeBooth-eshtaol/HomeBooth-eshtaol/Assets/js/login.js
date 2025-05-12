var DB;
// const loginBtn;
var user = document.getElementById("user");
var pass = document.getElementById("pass");
var button = document.getElementById("button-login");
var input = document.querySelectorAll("input");
var errord = document.getElementById("errord");

document.addEventListener("DOMContentLoaded", () => {
  let HomeGet = indexedDB.open("HomeGetDB", 1);

  console.log("101");
  HomeGet.onerror = function () {
    console.log("There was an error");
  };
  HomeGet.onsuccess = function () {
    DB = HomeGet.result;

    let objectStore = DB.transaction("Agents").objectStore("Agents");
    let objectStore1 = DB.transaction("Customer").objectStore("Customer");

    console.log(objectStore);
    objectStore.openCursor().onsuccess = function (e) {
      console.log("we are here");
      let cursor = e.target.result;
      console.log(cursor.value.AgentEmail);
      console.log(cursor.value.AgentPassword);

      function userChecker() {
        let v = -1;
        if (cursor) {
          if (
            user.value == cursor.value.AgentEmail &&
            pass.value == cursor.value.AgentPassword
          ) {
            v = 0;
          } else {
            objectStore1.openCursor().onsuccess = function (e) {
              let cursor1 = e.target.result;
              if (cursor1){
                if (
                  user.value == cursor.value.AgentEmail &&
                  pass.value == cursor.value.AgentPassword
                ) {
                  v = 0;
                }
              }
            }
          }
        }
        // cursor.continue();
        return v;
      }
      button.addEventListener("click", loginButton);
      function loginButton(e) {
        e.preventDefault();
        input[0].style.borderColor = "gray";
        input[1].style.borderColor = "gray";
        if (
          (user.value == null || user.value == "") &&
          (pass.value == null || pass.value == "")
        ) {
          user.placeholder = "PLEASE ENTER YOUR EMAIL";
          pass.placeholder = "PLEASE ENTER YOUR PASSWORD";
          input[0].style.borderColor = "red";
          input[1].style.borderColor = "red";
        } else if (user.value == null || user.value == "") {
          user.placeholder = "PLEASE ENTER YOUR PASSWORD";
          input[0].style.borderColor = "red";
        } else if (pass.value == null || pass.value == "") {
          pass.placeholder = "PLEASE ENTER YOUR PASSWORD";
          input[1].style.borderColor = "red";
        } else if (userChecker() == 0) {
          console.log("successful");
          localStorage.setItem("user", JSON.stringify({ email: user.value }));
          window.location.href = "index.html";
        } else {
          errord.innerHTML = "Incorrect username or password";
          errord.style.color = "red";
        }
      }
    };
  };
});
