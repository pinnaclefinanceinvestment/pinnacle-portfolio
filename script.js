function login() {
  let user = prompt("Enter username:");
  let pass = prompt("Enter password:");

  if (user && pass) {
    alert("Login successful! Welcome " + user);
    document.body.innerHTML = `
      <h1>Welcome, ${user}</h1>
      <p>Pinnacle Portfolio Dashboard</p>
    `;
  } else {
    alert("Please enter login details");
  }
}
