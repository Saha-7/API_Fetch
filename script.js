const userGrid = document.getElementById('user-grid');

// Display loading message
const loadingMessage = document.createElement('p');
loadingMessage.textContent = 'Loading user data...';
userGrid.appendChild(loadingMessage);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        userGrid.removeChild(loadingMessage);
        data.forEach(user => {
            const userElement = createUserElement(user);
            userGrid.appendChild(userElement);
        });
    })
    .catch(error => {
        userGrid.removeChild(loadingMessage);
        console.error('Error fetching data:', error);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Failed to fetch user data. Please try again later.';
        userGrid.appendChild(errorMessage);
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
