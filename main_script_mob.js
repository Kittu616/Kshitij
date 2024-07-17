const btn_1=document.getElementById("menu")

function myFunction() {
    document.getElementById("drop_list").classList.toggle("show2");
    $('.headers').css({'box-shadow':''}) 
  }


btn_1.addEventListener("click", myFunction);

window.onclick = function(event) {
    if (!event.target.matches('#menu')) {
      var dropdowns = document.getElementsByClassName("drop_list");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show2')) {
          openDropdown.classList.remove('show2');
        }
      }
      
    $(header).css({'box-shadow':'0px 3px 8px rgba(0, 0, 0, 0.5)'})
    }
  }