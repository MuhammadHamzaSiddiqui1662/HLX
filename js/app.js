users = JSON.parse(localStorage.getItem("users")) || [];
logedInUser = JSON.parse(localStorage.getItem("logedInUser")) || [];


function signUpBodyLoad() {
    firstName = document.getElementById("inputFirstName");
    lastName = document.getElementById("inputLastName");
    email = document.getElementById("inputEmail4");
    password = document.getElementById("inputPassword4");
    mobileNo = document.getElementById("inputMobileNo");
    cnicNo = document.getElementById("inputCnicNo");
    address = document.getElementById("inputAddress");

    function User (firstName, lastName, email, password, mobileNo, cnicNo, address) {
        this.firstName = firstName.value;
        this.lastName = lastName.value;
        this.email = email.value;
        this.password = password.value;
        this.mobileNo = mobileNo.value;
        this.cnicNo = cnicNo.value;
        this.address = address.value;
    }

    function addUser () {
        present = false;
        user = new User(firstName, lastName, email, password, mobileNo, cnicNo, address);
        users = JSON.parse(localStorage.getItem("Users")) || [];
        for (i=0 ; i<users.length ; i++) if(users[i].email == user.email) present = true;
        users.push(user);
        localStorage.setItem("Users",JSON.stringify(users));
    }
        
}