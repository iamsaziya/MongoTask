export const paths = {
  HOME: window.location.pathname.startsWith("/"),
  DASHBOARD: window.location.pathname.startsWith("/dashboard"),
  ANALYTICS: window.location.pathname.startsWith("/analytics"),
  LOGIN: window.location.pathname.startsWith("/users/login"),
  LOGOUT: window.location.pathname.startsWith("/users/logout"),
  SIGNUP: window.location.pathname.startsWith("/users/signup"),
  USER_DETAILS: window.location.pathname.startsWith("/users/:userId/"),
  PROJECTS: window.location.pathname.startsWith("/projects/"),
  ADD_PROJECT: window.location.pathname.startsWith("/projects/add"),
  EDIT_PROJECT: window.location.pathname.startsWith("/projects/:projectId/edit"),
  PROJECT_DETAILS: window.location.pathname.startsWith("/projects/:projectId/"),
  TASKS: window.location.pathname.startsWith("/projects/:projectId/tasks/"),
  ADD_TASK: window.location.pathname.startsWith("/projects/:projectId/tasks/add"),
  EDIT_TASK: window.location.pathname.startsWith("/projects/:projectId/tasks/:taskId/edit"),
  TASK_DETAILS: window.location.pathname.startsWith("/projects/:projectId/tasks/:taskId/"),
  // Add more routes as needed
};
