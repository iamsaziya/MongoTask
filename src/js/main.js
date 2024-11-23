// POST /users/login
import { paths } from "../js/route_paths.js";
if (paths.LOGIN) {
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
// POST /users/login
if (paths.SIGNUP) {
  document
    .getElementById("signupForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const name = document.getElementById("name").value;

      const submitButton = document.querySelector(
        '#signupForm button[type="submit"]'
      );

      const originalButtonText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.innerHTML = '<span class="spinner"></span> Signing up...';
      try {
        const response = await fetch("/users/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            name: name,
          }),
        });

        if (response.success) {
          const data = await response.json();
          // Handle successful signup
          window.location.href = "/login"; // Redirect after successful signup
        } else {
          // Handle login error
          console.error("signup failed");
          submitButton.disabled = false;
          submitButton.innerHTML = originalButtonText;
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
}
if (paths.DASHBOARD || paths.HOME) {
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
  floatBtn.addEventListener("click", showModal);
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
if (paths.DASHBOARD || paths.HOME) {
  // get method to get all projects from /projects
  const data = await fetch("/projects/api/123", { method: "GET" });
  const res = await data.json();
  const templateEngine = new TemplateEngine();
  // Process template
  const result = templateEngine.process(document.body.innerHTML, {
    projects: res.data,
  });
  document.body.innerHTML = result;
}

const projectId = window.location.pathname.split("/").pop();
const data = await fetch(`/projects/detail/${projectId}`, { method: "GET" });
const res = await data.json();
console.log(res);
const templateEngine = new TemplateEngine();
const result = templateEngine.process(document.body.innerHTML, {
  project: res.data,
});
document.body.innerHTML = result;
