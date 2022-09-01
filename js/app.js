/* Navbar Collapse */
let links = document.querySelectorAll(".navbar-nav .nav-link");
let navbar = document.querySelector(".navbar-collapse");

links.forEach((link) => {
    link.addEventListener('click', ()=> {
        navbar.classList.remove("show");
    });
});


//function for load student record in table on page load 
function loadData()
{
    fetch('php/load-data.php')
    .then( (response) => response.json())
    .then( (data) => {
        var tbody = document.getElementById('tbody');
        if(data['empty']) {
            tbody.innerHTML = `<tr><td colspan="6" align="center"><h3>No Record Found.</h3></td></tr>`
        } else {
            var tr = '';
            for (var i in data) {
                tr += `<tr>
                    <td align="center">${data[i].id}</td>
                    <td>${data[i].first_name} ${data[i].last_name}</td>
                    <td>${data[i].class_name}</td>
                    <td>${data[i].city}</td>
                    <td><button class="btn btn-warning" onclick="editRecord(${data[i].id})">Edit</button></td>
                    <td><button class="btn btn-info" onclick="viewRecord(${data[i].id})">View</button></td>
                    <td><button class="btn btn-danger" onclick="deleteRecord(${data[i].id})">Delete</button></td>
                </tr>`;
            }
            tbody.innerHTML = tr;
        }
    })
    .catch( (error) => {
        show_message("error", "Can't fatch data.");
    });
}

loadData();   //  Load Student Record on Page Opening

//Open Add New Student Modal Box 

function addNewModal()
{
    var addModal = document.getElementById('addModal');
    addModal.style.display = 'block';
    
    fetch('php/fetch-class-field.php')
    .then((response) => response.json())
    .then((data) => {
        var select = document.getElementById('classlist');
        var option = `<option value="0" disabled selected>Select Class</option>`;
        for(var i=0; i < data.length; i++){
            option += `<option value="${data[i].cid}">${data[i].class_name}</option>`;
        }
        select.innerHTML = option;
    })
    .catch((error) => {
       show_message("error", "Can't Fetch Class List") ;
    });
}

//Hide Modal Box 

function hide_modal()
{
     var addModal = document.getElementById('addModal');
    addModal.style.display = 'none';
    
     var editModal = document.getElementById('modal');
    editModal.style.display = 'none';
}



