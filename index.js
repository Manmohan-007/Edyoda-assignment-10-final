$(document).ready(function () {

  // api is not working  

  // $.ajax({
  //   type: "POST",
  //   url: "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login",
  //   data: {
  //     username: "12345", password: "Password"
  //   },
  //   success: function (response) {
  //     if (response) {
  //       alert("Login successful")
  //     }
  //     else {
  //       console.log("Invalid User")
  //     }
  //   }

  // })
  if (localStorage.getItem("login Status") == true) {

    location.assign("./orders.html")
  }
  let Credentials = {
    username: "Qaifi",
    password: "Password"
  }

  let UserName = document.getElementById("username");
  let Password = document.getElementById("password")




  $("#SubmitBtn").click((e) => {
    e.preventDefault();


    if (UserName.value == Credentials.username && Password.value == Credentials.password) {
      localStorage.setItem("login Status", true);
      location.assign("./orders.html")
    }
    else {

      alert("Enter the correct Credentials")
      UserName.value = ""
      Password.value = ""
    }


  })







});