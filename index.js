document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (emailPattern.test(email)) {
      alert("Welcome to the team!");
    } else {
      alert("Email is invalid");
    }
  });
