

// Define an object to store valid usernames and passwords
let validUsers = {
  "john": "password123",
  "jane": "password456",
  "mudassir":"khan",
  "ilyas":"000",
  "anas":"999"
};

function authenticateUser() {
  // Get the username and password from the input fields
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Check if the username and password match a valid user
  if (username in validUsers && validUsers[username] === password) {
    // Display a success message if the user is authenticated
    alert("You are an authenticated user!");
  } else {
    // Display an error message if the user is not authenticated
    alert("You are an invalid user!");
  }
}


