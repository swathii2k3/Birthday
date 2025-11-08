document.addEventListener("DOMContentLoaded", function () {
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }

  const loginForm = document.getElementById("loginForm");
  const passwordInput = document.getElementById("passwordInput");
  const loginContainer = document.querySelector(".login-container");
  const cakeContainer = document.querySelector(".cake-container");
  const correctPassword = "loveyou";

  // Only attach listener after DOM is loaded
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (passwordInput.value === correctPassword) {
      loginContainer.style.display = "none";
      cakeContainer.classList.remove("hidden");
      setInterval(createHeart, 200);
    } else {
      alert("Wrong password Sarru! Try again 🎈");
    }
  });
});
