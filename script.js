const mobileRegex = /(\+1[ ]|\()?(\d{3}\)?(-|\s)?){2}\d{4}/g; 

document.getElementById("submit").addEventListener("click", function() {

    let name = document.getElementById("name").value; 
    let phone = document.getElementById("phone").value; 
    let email = document.getElementById("email").value; 

    if(!phone.match(mobileRegex)){
       document.getElementById("error").style.display = initial; 
    }

    let table = document.getElementById("directory");
    let row = table.insertRow(-1);
    let newName = row.insertCell(0);
    let newPhone = row.insertCell(1);
    let newEmail = row.insertCell(2);

    newName.innerText = name; 
    newPhone.innerText = phone; 
    newEmail.innerText = email; 


})

// Sort table by name 
document.getElementById("directory").addEventListener("click", function() {
    let filterTable, rows, sorted, i, x, y, sortFlag;
      filterTable = document.querySelector("#directory");
      sorted = true;
      while (sorted) {
         sorted = false;
         rows = filterTable.rows;
         for (i = 1; i < rows.length - 1; i++) {
            sortFlag = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
               sortFlag = true;
               break;
            }
         }
         if (sortFlag) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            sorted = true;
         }
      }
})