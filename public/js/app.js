$(document).ready(function(){
  
    $('.sidenav').sidenav();
    
    $('.scrollspy').scrollSpy({
      scrollOffset: 100,
      throttle: 10
    });
    
  });

setTimeout(function () {
    $('.loader_bg').fadeToggle(650);
}, 2000);