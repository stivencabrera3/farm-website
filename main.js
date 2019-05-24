

// Dropdown menu

  const dropdown = document.getElementsByClassName("dropdown-btn");
  var i;
  
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      // this.classList.toggle("active");
      let dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }

  // Dropdown +- toggle
  
  const activeNav = function() {
    
    if (document.getElementById('plus').style.display !== 'none') {
      document.getElementById('plus').style.display = 'none'
      document.getElementById('minus').style.display = 'inline'
    } 
    else {
      document.getElementById('plus').style.display = 'inline'
      document.getElementById('minus').style.display = 'none'
    }
  }

  //  Dropdown +- toggle for second button
  const activeNav2 = function() {
    
    if (document.getElementById('plus2').style.display !== 'none') {
      document.getElementById('plus2').style.display = 'none'
      document.getElementById('minus2').style.display = 'inline'
    } 
    else {
      document.getElementById('plus2').style.display = 'inline'
      document.getElementById('minus2').style.display = 'none'
    }
  }







//   const activeNav = function() {
    
//   if (document.getElementById('plus').style.display !== 'none') {
//     document.getElementById('plus').style.display = 'none'
//     document.getElementById('minus').style.display = 'inline'
//   } else {
//     document.getElementById('plus').style.display = 'inline'
//     document.getElementById('minus').style.display = 'none'
//   }

// }

