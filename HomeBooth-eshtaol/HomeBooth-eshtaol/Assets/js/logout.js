var user= localStorage.getItem("user")
signinb= document.getElementById("signinb")
logoutb= document.getElementById("logoutb")
// console.log(logoutb)
if (JSON.parse(user) != null){
    
    signinb.style.display=  "none"
    logoutb.style.display="block"
    logoutb.addEventListener("click",clearer)

    function clearer(e){
        e.preventDefault();
        signinb.style.display="block"
        logoutb.style.display= "none"
        localStorage.clear();
    }

}