// Step 1: Create the main function that will fetch user data
async function fetchUserData() {
    // Step 2: Define where we're getting the data from (the API URL)
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Step 3: Find the HTML element where we'll show the data
    const dataContainer = document.getElementById('api-data');
    
    // Step 4: Use try-catch to handle success and errors
    try {
        // Send a request to get the data (like asking for information)
        const response = await fetch(apiUrl);
        
        // Convert the response to a format we can use (JSON to JavaScript objects)
        const users = await response.json();
        
        // Step 5: Clear the "Loading..." message
        dataContainer.innerHTML = '';
        
        // Step 6: Create a list to hold all the user names
        const userList = document.createElement('ul');
        
        // Loop through each user and create a list item for their name
        users.forEach(user => {
            // Create a new list item element
            const listItem = document.createElement('li');
            
            // Set the text to the user's name
            listItem.textContent = user.name;
            
            // Add this list item to our user list
            userList.appendChild(listItem);
        });
        
        // Add the complete list to the page
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Step 7: If something goes wrong, show an error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Step 8: Wait for the page to fully load, then fetch the data
document.addEventListener('DOMContentLoaded', fetchUserData);