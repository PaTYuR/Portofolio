$(document).ready(function(){
  
    $('.sidenav').sidenav();
    
    $('.scrollspy').scrollSpy();
  });

setTimeout(function () {
    $('.loader_bg').fadeToggle(650);
}, 2000);