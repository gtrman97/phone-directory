demo.addEventListener('click', function(){
    
    document.querySelector("main").style.display = "none";
    document.getElementById("guest-signin").style.display = "flex";

})
create.addEventListener('click', function(){
    
    document.querySelector("main").style.display = "none";
    document.querySelector(".create-account-form").style.display = "initial";

})