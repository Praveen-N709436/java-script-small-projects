// Login User
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    alert("Invalid credentials");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));

  // Redirect based on role
  if (user.role === "admin") window.location.href = "../admin-page/admin.html";
  else if (user.role === "staff") window.location.href = "../staff-page/staff.html";
  else window.location.href = "../user-page/user.html";
});
