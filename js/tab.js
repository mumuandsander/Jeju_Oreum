// 탭 관련 JS
function openCity(evt, cityName) {
    let i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // document.getElementById("main").style.display = "none";
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }