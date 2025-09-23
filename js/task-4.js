const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.elements.email.value.trim();
  const pasword = form.elements.password.value.trim();
  const userInfo = {
    email: email,
    password: pasword,
  };

  if (email === "" || pasword === "") {
    return alert("All form fields must be filled in");
  }
  console.log(userInfo);
  form.reset();
}
