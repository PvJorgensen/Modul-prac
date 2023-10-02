

//Globals ----------------------------------------------------------------
let myApp = document.getElementById('myApp');

//fetch ------------------------------------------------------------------
fetchUser();

function fetchUser() {
fetch('https://dummyjson.com/users?limit=0')
    .then((response) =>{
        //error check på netværk response
        if (!response.ok) {
            throw new Error ("not ok!" + response.status);
        }

        //konverter response til json data objekt
        let data = response.json();
        return data;
    })
    .then((data) => {
        recivedUsers(data.users);


    })

    .catch((error) => {
       console.log(error.message); 
    });
}


function recivedUsers(myUsers) {
    console.log(myUsers);
}