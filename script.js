const userGrid = document.getElementById('user-grid');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            const userElement = createUserElement(user);
            userGrid.appendChild(userElement);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

function createUserElement(user) {
    const userCard = document.createElement('div');
    userCard.classList.add('col-md-3', 'user-card');

    const userName = document.createElement('h4');
    userName.textContent = user.name;

    const userEmail = document.createElement('p');
    userEmail.textContent = user.email;

    const userPhone = document.createElement('p');
    userPhone.textContent = user.phone;

    userCard.appendChild(userName);
    userCard.appendChild(userEmail);
    userCard.appendChild(userPhone);

    return userCard;
}
