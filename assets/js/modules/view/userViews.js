

export function getAllUsers(userData, displayElement, buttonIf) {


// find DOM element
    let myApp = document.getElementById(displayElement);
    //clear DOM element
    myApp.innerHTML = '';


    let myUserHtml = '';
    userData.forEach(userObject => {

        myUserHtml += `<tr><td>${userObject.firstName}</td><td>${userObject.lastName}</td><td>Edit</td></tr>`;

        myApp.innerHTML = `<h2>Users</h2><table><tr><th>Fornavn</th><th>Efternavn</th><th>Edit</th></tr>${myUserHtml}</table>`;
});
}