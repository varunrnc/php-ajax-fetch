<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="favicon.ico" type="image/icon">
    <title>PHP-AJAX-FETCH</title>

    <!--    Bootstrap CSS CDN Link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <!--    Custome CSS -->
    <link rel="stylesheet" href="./css/style.css" type="text/css">
</head>

<body>

    <header>
        <div class="container-fluid">
            <!--            Navbar Start -->
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">PHP-AJAX-FETCH</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                


                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <!--
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
-->
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <!--            Navbar End -->
        </div>
    </header>

    <div class="container">
        <h1 class="text-center text-decoration-underline">Students List</h1>
        <hr>
        <button type="button" class="btn btn-primary float-end mx-5" onclick="addNewModal()">Add Student</button>
        <br><br>
        <hr>

        <div class="table-data">
            <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Name</th>
                    <th scope="col">Class</th>
                    <th scope="col">City</th>
                    <th scope="col">Edit</th>
                    <th scope="col">View</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody id="tbody">
               
            </tbody>
        </table>
        </div>
        
        <div class="alert alert-success" role="alert" id="success-message"></div>
        <div class="alert alert-danger" role="alert" id="error-message"></div>
    </div>
    
      <!-- modal for show add new -->
    
    <div id="addModal">
        <div id="modal-form">
            <h2 class="text-center text-decoration-underline">Add New Form</h2>
            <form method="POST" id="addModal-form">
                <div class="mb-3">
                  <label for="fname" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="fname">
                </div>
                <div class="mb-3">
                  <label for="lname" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="lname">
                </div>
                <label class="form-label">Class</label>
                <select class="form-select" id="classlist">
                  
                </select>
                <div class="mb-3">
                  <label for="city" class="form-label">City</label>
                  <input type="text" class="form-control" id="city">
                </div>
                <div class="mb-3">
                    <button type="submit" class="btn btn-primary" id="new-submit" onclick="submit_data()">Submit</button>
                </div>
            </form>
            <div id="close-btn" onClick="hide_modal()">X</div>
        </div>
    </div>
    
      <!-- modal for show edit --> 
    <div id="modal">
        <div id="modal-form">
            <h2 class="text-center text-decoration-underline">Edit Form</h2>
            <form method="POST">
                <div class="mb-3">
                  <label for="edit-fname" class="form-label">First Name</label>
                    <input type="text" id="edit-id" hidden>
                    <input type="text" class="form-control" id="edit-fname">
                </div>
                <div class="mb-3">
                  <label for="edit-lname" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="edit-lname">
                </div>
                <label for="lname" class="form-label">Class</label>
                <select class="form-select" id="edit-class">
                  
                </select>
                <div class="mb-3">
                  <label for="edit-city" class="form-label">City</label>
                  <input type="text" class="form-control" id="edit-city">
                </div>
                <div class="mb-3">
                    <button type="button" class="btn btn-primary" onclick="modify_data()" id="update_data">Update</button>
                </div>
            </form>
            <div id="close-btn" onClick="hide_modal()">X</div>
        </div>
    </div>










    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="./js/app.js" type="text/javascript"></script>
</body>
</html>