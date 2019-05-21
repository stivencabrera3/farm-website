const dropdown = document.getElementsByClassName('dropdown-btn');
var i;

for (i = 0; i < dropdown.length; i++) {

  dropdown[i].addEventListener('click', function () {
    // this.classList.toggle("active");
    let dropdownContent = this.nextElementSibling

    if (dropdownContent.style.width === '300px' && dropdownContent.style.opacity === '1') {

      dropdownContent.style.height = '0px'
      dropdownContent.style.display = 'none'
      dropdownContent.style.opacity = '0'
      dropdownContent.style.width = '0'

    } else {
      dropdownContent.style.display = 'block'
      dropdownContent.style.height = '225px'
      dropdownContent.style.opacity = '1'
      dropdownContent.style.width = '300px'
    }

  });
}
// const dropdown = document.getElementsByClassName("dropdown-btn");
// var i;

// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function() {
//     // this.classList.toggle("active");
//     let dropdownContent = this.nextElementSibling;
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }