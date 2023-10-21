var counter = 1;
setInterval(function(){
    document.getElementById('r'+ counter).checked = true;
    counter++;
    if(counter>3){
        counter=1;

    }
},5000);


var openSidebarBtn = document.getElementById('check');
var slidersec = document.querySelector('.slidesection');
var sidebar = document.querySelector('.sidebarsection');
var sidebarVisible = false;

openSidebarBtn.addEventListener('click', function() {
  if (sidebarVisible) {
    sidebar.style.left = '-290px';
    slidersec.style.width = '850px';
    slidersec.style.left= '0px';
    sidebarVisible = false;
  } else {
    sidebar.style.left = '0px';
    slidersec.style.width= '630px';
  slidersec.style.left= '245px';
    sidebarVisible = true;
  }
});

document.addEventListener('click', function(event) {
  var targetElement = event.target; 

  var isClickInsideSidebar = sidebar.contains(targetElement);

  if (!isClickInsideSidebar && targetElement !== openSidebarBtn) {
    sidebar.style.left = '-290px';
    slidersec.style.width = '850px';
    slidersec.style.left= '0px';
  }
});
