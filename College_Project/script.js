const search = () => {
  let searchBox = document.getElementById("search").value.toUpperCase();
  let sidebarSearchBox = document.getElementById("sidebarSearch").value.toUpperCase();
  if (sidebarSearchBox.length > 0) {
    searchBox = sidebarSearchBox;
  }

  const books = document.querySelectorAll(".container");
  const bName = document.getElementsByTagName("h3");

  for (var i = 0; i < bName.length; i++) {
    let match = books[i].getElementsByTagName("h3")[0];
    if (match) {
      let textValue = match.textContent || match.innerHTML;
      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        books[i].style.display = "";
      } else {
        books[i].style.display = "none";
      }
    }
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "0px" || sidebar.style.width === "") {
    sidebar.style.width = "250px";
  } else {
    sidebar.style.width = "0";
  }
}
