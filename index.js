document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию
    
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i; // Регулярное выражение для проверки email
    
    if (emailPattern.test(email)) {
      alert("Welcome to the team!");
    } else {
      alert("Email is invalid");
    }
  });