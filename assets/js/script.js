function generatePassword() {
    var length = document.getElementById("length").value;
    var lowercase = document.getElementById("lowercase").checked;
    var uppercase = document.getElementById("uppercase").checked;
    var numeric = document.getElementById("numeric").checked;
    var special = document.getElementById("special").checked;
    
    if (length < 8 || length > 128) {
      alert("Invalid length! Please enter a number between 8 and 128.");
      return;
    }
    
    if (!lowercase && !uppercase && !numeric && !special) {
      alert("You must select at least one character type!");
      return;
    }
    
    var password = generateRandomPassword(length, lowercase, uppercase, numeric, special);
    var passwordField = document.getElementById("password");
  
    passwordField.rows = Math.ceil(length / 15); // Adjust depending on how many characters you expect per line.
  
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
        copyBtn.textContent = "Copied";
        copyBtn.classList.add("success");
        copySuccess.classList.remove("hidden");
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
  
      if ((i + 1) % 30 === 0) {
        password += '\n';
      }
    }
  
    return password;
  }
  