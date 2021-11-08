//information in order to make API call -
const auth = 'appid=5YQ6LG-GH3HQ42U69&'
const apiLink = 'https://api.wolframalpha.com/v2/query?';
const userInput = document.querySelector("#search");

//load the U.S. cities into the html as dropdown options in HTML
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//capture the user input
// userInput.addEventListener('click', () => {
//   let textInput = '';
//   textInput = document.querySelector('#blank').value;
//   test(textInput);
// });



