export const paths = {
    // you need to fix the issue of any id after for example users/:userid i think this will render as users/someid then this function will not work
    
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
