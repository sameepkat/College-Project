//querySelectors
const bookName = document.getElementById("bookName");
const bookcode = document.getElementById("bookcode");
const name = document.getElementById("name");
const email = document.getElementById("email");
const sDate = document.getElementById("sDate");
const eDate = document.getElementById("eDate");

const search = () => {
  let searchBox = document.getElementById("search").value.toUpperCase();
  let sidebarSearchBox = document
    .getElementById("sidebarSearch")
    .value.toUpperCase();
  if (sidebarSearchBox.length > 0) {
    searchBox = sidebarSearchBox;
  }

  const books = document.querySelectorAll(".container");
  const bName = document.getElementsByTagName("h3");
  const head = document.querySelectorAll(".head");

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
};

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "0px" || sidebar.style.width === "") {
    sidebar.style.width = "250px";
  } else {
    sidebar.style.width = "0";
  }
}

function passToConnect(bookName, bookcode, name, email, sDate, eDate) {
  const url = `connect.php/?bookName=${bookName}&bookcode=${bookcode}&name=${name}&email=${email}&sDate=${sDate}&eDate=${eDate}`;
  console.log(url);
  fetch(url)
    .then((respone) => respone.json())
    .then((body) =>{
      if(body)
        alert("Successfull");
      else
        alert("Unsucessfull");
    })
    .catch((error) => {
      alert("Error. See console for more Info")
      console.log(error, "This is usually because something is wrong with PHP");
    });
}

document.addEventListener("DOMContentLoaded", (event) => {
  var modal = document.getElementById("formModal");
  var showFormBtn = document.getElementById("showFormBtn");
  var span = document.getElementsByClassName("close")[0];

  showFormBtn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  document.getElementById("bookForm").onsubmit = function (event) {
    event.preventDefault();
    modal.style.display = "none";
    passToConnect(
      bookName.value,
      bookcode.value,
      name.value,
      email.value,
      sDate.value,
      eDate.value
    );
  };
});
