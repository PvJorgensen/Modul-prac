import { getAllUsers as showUsers } from "./modules/view/userViews.js";
//Globals ----------------------------------------------------------------

//fetch users model kode -------------------------------------------------
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

// view kode --------------------------------
function recivedUsers(myUsers) {
    showUsers(myUsers, 'app', false);
}