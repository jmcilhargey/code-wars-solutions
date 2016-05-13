function validate(password) {
  var regEx = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/);
  
  return regEx.test(password);
}