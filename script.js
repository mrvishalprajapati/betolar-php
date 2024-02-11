
function myFunction1() {
    var myDropdown1 = document.getElementById("myDropdown1");
    myDropdown1.classList.toggle("show");
    
    // Close other dropdowns
    closeOtherDropdowns(myDropdown1);
    updateNavbarStyles(myDropdown1);
  }
  
  function myFunction2() {
    var myDropdown2 = document.getElementById("myDropdown2");
    myDropdown2.classList.toggle("show");
    
    // Close other dropdowns
    closeOtherDropdowns(myDropdown2);
    updateNavbarStyles(myDropdown2);
  }
  
  function myFunction3() {
    var myDropdown3 = document.getElementById("myDropdown3");
    myDropdown3.classList.toggle("show");
    
    // Close other dropdowns
    closeOtherDropdowns(myDropdown3);
    updateNavbarStyles(myDropdown3);
  }
  
  function myFunction4() {
    var myDropdown4 = document.getElementById("myDropdown4");
    myDropdown4.classList.toggle("show");
    
    // Close other dropdowns
    closeOtherDropdowns(myDropdown4);
    updateNavbarStyles(myDropdown4);
  }
  
  function myFunction5() {
    var myDropdown5 = document.getElementById("myDropdown5");
    myDropdown5.classList.toggle("show");
    
    // Close other dropdowns
    closeOtherDropdowns(myDropdown5);
    updateNavbarStyles(myDropdown5);
  }
  
  function myFunction6() {
    var myDropdown6 = document.getElementById("myDropdown6");
    myDropdown6.classList.toggle("show");
    
    // Close other dropdowns
    closeOtherDropdowns(myDropdown6);
    updateNavbarStyles(myDropdown6);
  }

  function myFunction7() {
    var myDropdown7 = document.getElementById("myDropdown7");
    myDropdown7.classList.toggle("show");
    
    // Close other dropdowns
    closeOtherDropdowns(myDropdown7);
    updateNavbarStyles(myDropdown7);
  }
  
  function closeOtherDropdowns(openDropdown) {
    // Close all dropdowns except the one passed as an argument
    var dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(function(dropdown) {
      if (dropdown !== openDropdown && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
  }
  
  // Close the dropdown if the user clicks outside of any dropdown button
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
      closeAllDropdowns();
    }
  };
  
// window.onclick = function(e){
//   if(!e.target.matches('.navbar-toggler')){

//     closeAllDropdowns();
//   }
// }


  function closeAllDropdowns() {
    // Close all dropdowns on the page
    var dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(function(dropdown) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
    updateNavbarStyles(null);
  }
  
  // function openBar(){
  //   document.getElementById("navbar").style.height ="100%";
  // }
  // function closeBar(){
  //   document.getElementById("navbar").style.height ="0%";
  // }

  