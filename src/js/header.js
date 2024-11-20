const setSideBar = () => {
  document.querySelector("#sidebar").innerHTML = `
      <header>
      <aside>
        <nav>
          <ul>
            <li><h2>MT</h2></li>
            <li>
                    <a href="/dashboard">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z"/></svg>
                    
                    </a>
                  </li>
            <li>
              <a href="/private" class="nav-group">
               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"/></svg>
              </a>
            </li>
            <li>
              <a href="calender">
           <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg>
             
              </a>
            </li>
             <li>
              <a href="analytics">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M680-160q-17 0-28.5-11.5T640-200v-200q0-17 11.5-28.5T680-440h80q17 0 28.5 11.5T800-400v200q0 17-11.5 28.5T760-160h-80Zm-240 0q-17 0-28.5-11.5T400-200v-560q0-17 11.5-28.5T440-800h80q17 0 28.5 11.5T560-760v560q0 17-11.5 28.5T520-160h-80Zm-240 0q-17 0-28.5-11.5T160-200v-360q0-17 11.5-28.5T200-600h80q17 0 28.5 11.5T320-560v360q0 17-11.5 28.5T280-160h-80Z"/></svg>
             
              </a>
            </li>
          </ul>
 <li>
              <a href="#" class="nav-group">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM400-280q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280ZM280-720v520-520Z"/></svg>
              </a>
            </li>

        </nav>
      </aside>
    </header>
    `
}

const setHeader = () => {
  let isFilter = document.querySelector("#header").getAttribute('data-filter');
  let html = `<nav>
        <div class="nav">
          <h2><a href="index.html">MongoTask</a></h2>
          <ul>
            <li class="searchLi">
              <input type="search" placeholder="Search" />
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="currentColor"
                >
                  <path
                    d="M380-320q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l224 224q11 11 11 28t-11 28q-11 11-28 11t-28-11L532-372q-30 24-69 38t-83 14Zm0-80q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
                  />
                </svg>
              </span>
            </li>
  
            <li>
              <a href="">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="currentColor"
                  >
                    <path
                      d="M200-200q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280h40v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h40q17 0 28.5 11.5T800-240q0 17-11.5 28.5T760-200H200Zm280-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"
                    />
                  </svg>
                  </span>
                </a>
            </li>
          </ul>
        </div>
      `
  if (isFilter) {
    html += `<div id="filter" class="task_filter">
          <div class="form_group">
            <label for="label">Label</label>
            <select name="label" id="label">
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
              <option value="pending">Pending</option>
            </select>
            
          </div>

          <div class="form_group">
            <label for="label">Category</label>
            <select name="label" id="label">
              <option value="inprogress">Internal</option>
              <!-- <option value="done">Done</option>
              <option value="pending">Pending</option> -->
            </select>
            
          </div>

          <div class="form_group">
            <label for="label">Sort</label>
            <select name="label" id="label">
              <option value="inprogress">By Activity</option>
              <option value="done">By A-Z </option>
              <option value="pending">By Z-A</option>
            </select>
            
          </div>
        </div>`

    html += "</nav>"
  }

  html += "</nav>"
  document.getElementById("header").innerHTML = html;
}

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;

  if (currentScroll > 100) {
    // Scrolling down
    document.getElementById("filter").classList.add("hidden");
  } else {
    // Scrolling up
    document.getElementById("filter").classList.remove("hidden");
  }
  lastScroll = currentScroll;
});
// Initialize UI for sidebar and header
setSideBar()
setHeader()