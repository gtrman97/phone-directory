const mobileRegex = /^([0-9]){10}/; 

document.getElementById("submit").addEventListener("click", function() {

    let name = document.getElementById("name").value; 
    let phone = document.getElementById("phone").value; 
    let email = document.getElementById("email").value; 

    let table = document.getElementById("directory");
    let row = table.insertRow(-1);
    let newName = row.insertCell(0);
    let newPhone = row.insertCell(1);
    let newEmail = row.insertCell(2);

    newName.innerText = name; 
    newPhone.innerText = phone; 
    newEmail.innerText = email; 


})