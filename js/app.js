const submit_btn = document.getElementById("new-submit");

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
        show_message('error', "Can't fatch data.");
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
       show_message('error', "Can't Fetch Class List");
    });
}

//Hide Modal Box 

function hide_modal()
{
     var addModal = document.getElementById('addModal');
    addModal.style.display = 'none';
    
     var editModal = document.getElementById('modal');
    editModal.style.display = 'none';
    
    var viewModal = document.getElementById('viewModal');
    viewModal.style.display = 'none';
}


//Add Student Record 
submit_btn.addEventListener("click", (event) => {
    event.preventDefault();
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var sClass = document.getElementById('classlist').value;
    var city = document.getElementById('city').value;
    
    if(fname == '' || lname == '' || sClass == '0' || city == '') {
        alert("Please fill all the fields!");
        return false;
    } else {
        var objFormData = {
            'fname' : fname,
            'lname' : lname,
            'class' : sClass,
            'city' : city
        }
                
        fetch('php/insert_data.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(objFormData),
            
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.insert == 'success') {
                    show_message('success', 'Data Saved Successfully.');
                    loadData();
                    hide_modal();
                    document.getElementById('addModal-form').reset();
            } else {
                show_message('error',"Data Can't Inserted.");
				hide_modal();
            }
        })
        .catch((error) => {
            show_message('error', "Data not Inserted!");
        });
    }
})

//Open Update Modal Box and Show Student record in it. 

function editRecord(id)
{
    var editModal = document.getElementById("modal");
    editModal.style.display = 'block';
    
    fetch('php/fetch-edit.php?editId=' + id)
    .then((response) => response.json())
    .then((data) => {
        var option = '';
       
        for(var i in data["response"]) {
            document.getElementById("edit-id").value = data["response"][i].id;
            document.getElementById("edit-fname").value = data["response"][i].first_name;
            document.getElementById("edit-lname").value = data["response"][i].last_name;
            document.getElementById("edit-city").value = data["response"][i].city;
            
            var selected = '';
            for(var j in data['class']) {
                if(data['class'][j].cid == data["response"][i].class) {
                    selected = 'selected';
                } else {
                    selected = '';
                }
                option += `<option ${selected} value='${data['class'][j].cid}'>${data['class'][j].class_name}</option>`;
            }
            
            document.getElementById("edit-class").innerHTML = option;
        } 
    })
    .catch((error) => {
        show_message('error', "Can't Fetch Data");
    });
}

//Updata Student Record 

function modify_data() {
    var id = document.getElementById('edit-id').value;
    var fname = document.getElementById('edit-fname').value;
    var lname = document.getElementById('edit-lname').value;
    var sClass = document.getElementById('edit-class').value;
    var city = document.getElementById('edit-city').value;
    
     console.log(id);
    
    if(fname == '' || lname == '' || sClass == '0' || city == '') {
        alert("Please fill all fields ");
        return false;
    } else {
        var formData = {
            's_id' : id,
            'fname' : fname,
            'lname' : lname,
            'class' : sClass,
            'city' : city
        }

        fetch('php/update.php', {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.update == 'success') {
                show_message('success', 'Data Updated Successfully.');
                loadData();
                hide_modal();
            } else {
                show_message('error', "Data Can't Updated.");
                hide_modal();
            }
        })
        .catch((error) => {
            show_message('error', "Data Can't Updated : Server Problem.");
        });
    }
}

// View Record Data
function viewRecord(id) {
    var viewModal = document.getElementById("viewModal");
    viewModal.style.display = "block";
    
    fetch('php/view.php?vid=' + id)
    .then((response) => response.json())
    .then((data) => {
        var option = '';
        for(var i in data['response']) {
            document.getElementById("view-fname").value = data['response'][i].first_name;
            document.getElementById("view-lname").value = data['response'][i].last_name;            
            document.getElementById("view-city").value = data['response'][i].city;
            
            var selected = '';
            for(var j in data['class']) {
                if(data['class'][j].cid == data['response'][i].class) {
                    selected = 'selected';
                } else {
                    selected = '';
                }
                option += `<option ${selected} disabled value="${data['class'][j].cid}">${data['class'][j].class_name}</option>`;
            }
            document.getElementById("view-class").innerHTML = option;
        }
    })
    .catch((error) => {
        show_message('error', "Data can't fetch");
    });
}



//Delete Record 
function deleteRecord(id)
{
    if(confirm("Are you sure want to Delete this record?")) {
        fetch('php/delete.php?delId=' + id, {
            method : "DELETE"
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.delete == 'success') {
                show_message('success', 'Record Deleted Successfully.');
                loadData();
            } else {
                show_message('error', "Can't Delete Record");
            }
        })
        .catch((error) => {
            show_message('error', 'Data not deleted') ;
        });
    }
}

// Search Student Record

function loadSearch()
{
    var search = document.getElementById('search').value;
    if(search == ''){
        loadData();
        return false;
    } else {
        fetch('php/search.php?search=' + search)
        .then((response) => response.json())
        .then((data) => {
            var tbody = document.getElementById("tbody");
            if(data['empty']) {
                tbody.innerHTML = `<tr><td colspan="6" align="center"><h3>No Record Found.</h3></td></tr>`
            } else {
                var tr = '';
                for(var i in data) {
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
        .catch((error) => {
            show_message('error', "Can't Search Data");
        });
    }
}


// Show error / success message 

function show_message(type, message)
{
    if(type == 'error'){
        var message_box = document.getElementById('error-message');
    } else {
        var message_box = document.getElementById('success-message');
    }
    
    message_box.innerHTML = message;
    message_box.style.display = "block";
    setTimeout(function(){
        message_box.style.display = "none";
    },3000);
}

