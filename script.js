document.getElementById("password").addEventListener("input", function () {
  const password = this.value;
  const feedback = document.getElementById("feedback");
  const strength = assessPasswordStrength(password);

  feedback.textContent = strength.message;
  feedback.className = strength.class;

  // Update criteria feedback
  updateCriteriaFeedback(password);
});

document
  .getElementById("togglePassword")
  .addEventListener("change", function () {
    const passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password";
  });

function assessPasswordStrength(password) {
  let strength = 0;
  let feedback = {
    message: "Weak password",
    class: "weak",
  };

  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[@$!%*?&#]/.test(password)) strength++;

  if (strength === 5) {
    feedback.message = "Strong password";
    feedback.class = "strong";
  } else if (strength >= 3) {
    feedback.message = "Moderate password";
    feedback.class = "moderate";
  }

  return feedback;
}

function updateCriteriaFeedback(password) {
  const lengthCriteria = document.getElementById("length");
  const lowercaseCriteria = document.getElementById("lowercase");
  const uppercaseCriteria = document.getElementById("uppercase");
  const numberCriteria = document.getElementById("number");
  const specialCriteria = document.getElementById("special");

  lengthCriteria.className = password.length >= 8 ? "valid" : "invalid";
  lowercaseCriteria.className = /[a-z]/.test(password) ? "valid" : "invalid";
  uppercaseCriteria.className = /[A-Z]/.test(password) ? "valid" : "invalid";
  numberCriteria.className = /[0-9]/.test(password) ? "valid" : "invalid";
  specialCriteria.className = /[@$!%*?&#]/.test(password) ? "valid" : "invalid";
}
