<script>
  const form = document.querySelector("form");
  const successMsg = document.createElement("div");
  successMsg.className = "success-message";
  successMsg.textContent = "✅ Message Sent Successfully!";
  form.parentNode.insertBefore(successMsg, form.nextSibling);

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent instant page reload
    fetch(form.action, {
      method: "POST",
      body: new FormData(form)
    })
      .then(() => {
        form.reset();
        successMsg.style.display = "block";
        setTimeout(() => (successMsg.style.display = "none"), 4000);
      })
      .catch(() => alert("❌ Something went wrong, please try again."));
  });
</script>

