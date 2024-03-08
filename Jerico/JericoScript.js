window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("topsnavi").style.background = "#000000";
    } else {
      document.getElementById("topsnavi").style.background = "none";
    }
  }