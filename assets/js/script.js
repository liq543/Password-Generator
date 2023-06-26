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
    
    document.getElementById("password").value = password;
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
  