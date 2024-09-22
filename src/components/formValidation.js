const formValidation = (formData) => {
  const newErrors = {};
  const { username, email, password, confirmPassword } = formData;
  console.log("Data of Form is ", formData);

  if (!username || username.length < 2) {
    newErrors.username = "Username must be at least 5 characters long.";
  }

  if (!email || !email.includes("@gmail")) {
    newErrors.email = "Please enter a valid email.";
  }

  if (!password || password.length < 2) {
    newErrors.password = "Password must be at least 8 characters long.";
  }

  if (confirmPassword !== password) {
    newErrors.confirmPassword = "Passwords do not match.";
  }
  console.log("Validation Errors in Form Validation Page:", newErrors); // Debugging log
  return newErrors;
};

export default formValidation;
