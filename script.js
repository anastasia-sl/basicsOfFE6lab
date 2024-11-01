// Function to fetch and display user data from the API
function fetchUserData() {
    fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(data => {
            // Extract relevant data
            const user = data.results[0];
            const picture = user.picture.large;
            const city = user.location.city;
            const name = `${user.name.first} ${user.name.last}`;
            const cell = user.cell;
            const phone = user.phone;

            // Display the data in the specified format
            document.getElementById('userData').innerHTML = `
        <div>
          <img src="${picture}" alt="User Picture">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Cell:</strong> ${cell}</p>
          <p><strong>Phone:</strong> ${phone}</p>
        </div>
      `;
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
}

// Add event listener to the button to trigger the fetch
document.getElementById('fetchButton').addEventListener('click', fetchUserData);
