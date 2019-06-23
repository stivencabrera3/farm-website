

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


  // Opens and closed menu on top nav for mobile on menu button click

 const openMenu = function(){
   let sideNav = document.getElementById('side-nav')
   let main = document.querySelector('main')
   let topNav = document.getElementById('top-nav')
  
   if (sideNav.style.left === '-300px') {

     sideNav.style.left = '0'
     main.style.marginLeft = '300px'
     topNav.style.marginLeft = '300px'

   } else {
     sideNav.style.left = '-300px'
     main.style.marginLeft = '0px'
     topNav.style.marginLeft = '0px'
     
   }
 }

//  Closes menu on click of close-btn

const closeMenu = function(){
  let sideNav = document.getElementById('side-nav')
  let topNav = document.getElementById('top-nav')
  let main = document.querySelector('main')
  

  if (sideNav.style.left === '0px') {
    sideNav.style.left = '-300px'
    main.style.marginLeft = '0px'
    topNav.style.marginLeft = '0px'
  }
}




