document.getElementById("password").addEventListener("input", function () {
  const password = this.value;
  const feedback = document.getElementById("feedback");
  const strength = assessPasswordStrength(password);

  feedback.textContent = strength.message;
  feedback.className = strength.class;
});

function assessPasswordStrength(password) {
  let strength = 0;
  let feedback = {
    message: "Weak password",
    class: "weak",
  };

  // Check length
  if (password.length >= 8) strength++;

  // Check for lowercase letters
  if (/[a-z]/.test(password)) strength++;

  // Check for uppercase letters
  if (/[A-Z]/.test(password)) strength++;

  // Check for numbers
  if (/[0-9]/.test(password)) strength++;

  // Check for special characters
  if (/[@$!%*?&#]/.test(password)) strength++;

  // Assess password strength
  if (strength === 5) {
    feedback.message = "Strong password";
    feedback.class = "strong";
  } else if (strength >= 3) {
    feedback.message = "Moderate password";
    feedback.class = "moderate";
  }

  return feedback;
}
