const birthdayContainer = document.getElementById('container');
const url = "GET /:apikey/:token/gloapis/birthdays";

let bday = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => {
        
        // birthdayContainer.textContent = `${item}`
    })
}