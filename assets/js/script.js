function generatePassword() {
    var length = prompt("Enter the length of the password (between 8 and 128 characters):");
    if (length === null) {
      return;
    }
    
    length = parseInt(length);
    
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Invalid length! Please enter a number between 8 and 128.");
      return;
    }
    
    var lowercase = confirm("Include lowercase characters?");
    var uppercase = confirm("Include uppercase characters?");
    var numeric = confirm("Include numeric characters?");
    var special = confirm("Include special characters?");
    
    if (!lowercase && !uppercase && !numeric && !special) {
      alert("You must select at least one character type!");
      return;
    }
    
    var password = generateRandomPassword(length, lowercase, uppercase, numeric, special);
    var passwordField = document.getElementById("password");
    passwordField.rows = Math.ceil(length / 15);
    var copyBtn = document.querySelector(".copy-btn");
    var copySuccess = document.getElementById("copy-success");
    
    passwordField.value = password;
    passwordField.classList.remove("edit-mode");
    copyBtn.classList.remove("hidden");
    copySuccess.classList.add("hidden");
    
    passwordField.select();
    passwordField.setSelectionRange(0, passwordField.value.length);
    
    copyBtn.textContent = "Copy to Clipboard";
  }
  
  function copyToClipboard() {
    var passwordField = document.getElementById("password");
    var copyBtn = document.querySelector(".copy-btn");
    var copySuccess = document.getElementById("copy-success");
  
    passwordField.select();
    passwordField.setSelectionRange(0, passwordField.value.length);
  
    try {
      var successful = document.execCommand("copy");
      if (successful) {
        copyBtn.textContent = "Success";
        copyBtn.disabled = true;
        copyBtn.classList.add("success");
        copySuccess.classList.remove("hidden");
        copyBtn.style.display = "none"; // Add this line
      }
    } catch (err) {
      console.log("Failed to copy password to clipboard:", err);
    }
  }  
  
  function generateRandomPassword(length, lowercase, uppercase, numeric, special) {
    var chars = "";
    
    if (lowercase) {
      chars += "abcdefghijklmnopqrstuvwxyz";
    }
    
    if (uppercase) {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    
    if (numeric) {
      chars += "0123456789";
    }
    
    if (special) {
      chars += "!@#$%^&*()_+-={}[]|:;<>,.?/~";
    }
    
    var password = "";
    
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * chars.length);
      password += chars.charAt(randomIndex);
    }
    
    return password;
  }
