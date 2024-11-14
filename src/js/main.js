// POST /users/login
if (window.location.pathname === "/login") {
  document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const submitButton = document.querySelector(
      '#loginForm button[type="submit"]'
    );

    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="spinner"></span> Logging in...';
    try {
      const response = await fetch("/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Handle successful login
        window.location.href = "/dashboard"; // Redirect after successful login
      } else {
        // Handle login error
        console.error("Login failed");
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });
}

if (window.location.pathname === "/dashboard") {
  // Get modal elements
  const modal = document.getElementById("modal");
  const modalTitle = document.querySelector("#modal_header h3");
  const modalBody = document.getElementById("modal_body");
  const closeBtn = document.querySelector(".close_btn");
  const discardBtn = document.querySelector("#modal_footer button:first-child");
  const createBtn = document.querySelector("#modal_footer button:last-child");
  const floatBtn = document.querySelector(".float-btn");

  // Show modal
  const showModal = () => {
    modal.style.display = "flex";
    modalTitle.textContent = "Create New Task";

    // Reset form fields
    const inputs = modalBody.querySelectorAll("input, select");
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  // Hide modal
  const hideModal = () => {
    modal.style.display = "none";
  };

  // Event listeners
  floatBtn.addEventListener('click', showModal);
  closeBtn.addEventListener("click", hideModal);
  discardBtn.addEventListener("click", hideModal);

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      hideModal();
    }
  });

  // Handle task creation
  createBtn.addEventListener("click", async () => {
    const taskName = modalBody.querySelector(
      'input[placeholder="Task Name"]'
    ).value;
    const description = modalBody.querySelector(
      'input[placeholder="Task Description"]'
    ).value;
    const deadline = modalBody.querySelector('input[type="date"]').value;
    const priority = modalBody.querySelector("#priority").value;
    const status = modalBody.querySelector("#status").value;

    if (!taskName || !deadline) {
      alert("Please fill in required fields");
      return;
    }

    try {
      const response = await fetch("/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: taskName,
          description,
          deadline: new Date(deadline),
          priority,
          status,
        }),
      });

      if (response.ok) {
        hideModal();
        // Optionally refresh the task list
        window.location.reload();
      } else {
        alert("Failed to create task");
      }
    } catch (error) {
      console.error("Error creating task:", error);
      alert("Error creating task");
    }
  });
}
