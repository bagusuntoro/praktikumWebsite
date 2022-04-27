function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.getElementById("mySidenav").style.width = "300px";
      document.getElementById("content").style.marginLeft="0";
    }else{
      document.getElementById("content").style.marginLeft="250px";
    }
}
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("content").style.marginLeft="0";
  }




  // ubah warna
  document.body.addEventListener('mousemove', function () {
    const sumbuX = Math.round((event.clientX / window.innerWidth) * 255);
    const sumbuY = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb(' + sumbuX + ',' + sumbuY + ',100)';
});