function showSidebar() {
  const sidebar = document.querySelector('.sidenav');
  sidebar.style.right = 0
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidenav');
  sidebar.style.right = '-1000px';
}

let dropdownShown = false;

function showDropdown() {
  if (!dropdownShown) {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display = "block"
    dropdown.style.visibility = "visible"
    dropdown.style.opacity = 1

    dropdownShown = true;
  } else {
    console.log("jj")
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display = "non"
    dropdown.style.visibility = "hidden"
    dropdown.style.opacity = 0

    dropdownShown = false;
  }

}