export const paths = {
  // you need to fix the issue of any id after for example users/:userid i think this will render as users/someid then this function will not work

  HOME: window.location.pathname == "/",
  DASHBOARD: window.location.pathname == "/dashboard",
  ANALYTICS: window.location.pathname == "/analytics",
  LOGIN: window.location.pathname == "/users/login",
  LOGOUT: window.location.pathname == "/users/logout",
  SIGNUP: window.location.pathname == "/users/signup",
  USER_DETAILS: window.location.pathname == "/users/:userId/",
  PROJECTS: window.location.pathname == "/projects/",
  ADD_PROJECT: window.location.pathname == "/projects/add",
  EDIT_PROJECT: window.location.pathname == "/projects/:projectId/edit",
  PROJECT_DETAILS: window.location.pathname == "/projects/:projectId/",
  TASKS: window.location.pathname == "/projects/:projectId/tasks/",
  ADD_TASK: window.location.pathname == "/projects/:projectId/tasks/add",
  EDIT_TASK:
    window.location.pathname == "/projects/:projectId/tasks/:taskId/edit",
  TASK_DETAILS:
    window.location.pathname == "/projects/:projectId/tasks/:taskId/",
  // Add more routes as needed
};
