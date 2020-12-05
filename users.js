$(document).ready(function () {

    let TbodyDiv = document.getElementsByTagName("tbody")[1];
    if (!localStorage.getItem("login Status")) {

        location.assign("./index.html")
    }
    const UserTableRow = (data) => {
        var trWrapper = document.createElement('tr');
        trWrapper.classList.add('UserList_TableRow');
        var tdID = document.createElement('td');
        tdID.classList.add('UserList_SecondaryText');
        tdID.innerText = data.id
        var tdUserAvatarImg = document.createElement('img');
        tdUserAvatarImg.src = data.profilePic;
        tdUserAvatarImg.alt = "profilePic"

        var tdUserAvatarWrap = document.createElement('td');
        tdUserAvatarWrap.classList.add('UserList_PrimaryText');

        var tdFullName = document.createElement('td');
        tdFullName.classList.add('UserList_SecondaryText');
        tdFullName.innerText = data.fullName;

        var tdDOB = document.createElement('td');
        tdDOB.classList.add('UserList_PrimaryText');
        tdDOB.innerText = data.dob;
        var tdGender = document.createElement('td');
        tdGender.classList.add('UserList_SecondaryText');
        tdGender.innerText = data.gender;
        var tdCurrentLocation = document.createElement('td');
        tdCurrentLocation.classList.add('UserList_SecondaryText');
        tdCurrentLocation.innerText = `${data.currentCity} ,${data.currentCountry}`;

        trWrapper.appendChild(tdID);
        trWrapper.appendChild(tdUserAvatarWrap);
        tdUserAvatarWrap.appendChild(tdUserAvatarImg);
        trWrapper.appendChild(tdFullName);
        trWrapper.appendChild(tdDOB);
        trWrapper.appendChild(tdGender);
        trWrapper.appendChild(tdCurrentLocation);

        return trWrapper




    }

    $("#Logoutbtn").click((e) => {
        e.preventDefault();
        localStorage.setItem("login Status", false)
        location.assign("./index.html")
    })


    let response;
    $.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users', function (data, status) {
        response = data;

        response.map(item => {
            var trRows = UserTableRow(item)
            TbodyDiv.appendChild(trRows)
        })
    })
    const OnResetClick = () => {

        var row = document.getElementsByClassName("UserList_TableRow")
        for (let i = 0; i < row.length; i++) {

            row[i].style.display = "";
        }
    }
    $("#UserList_Button").click(() => {
        OnResetClick()
    })

    $("#UserList_SearchBox").keypress(function (event) {

        if (event.keyCode === 13) {
            event.preventDefault();

            var filter = event.target.value.toUpperCase();
            if (event.target.value.length > 2) {

                for (var i in response) {
                    var output = response[i].fullName.toUpperCase();
                    var row = document.getElementsByClassName("UserList_TableRow");

                    if (output.indexOf(filter) > -1) {
                        row[i].style.display = "";
                    }
                    else {
                        row[i].style.display = "none";
                    }
                }


            }
            else {

                alert("The value must be more than two characters")
                OnResetClick();
            }




        }


    });


































})