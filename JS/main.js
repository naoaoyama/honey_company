console.log('haha');
/*ハンバーガーメニュー */
  // function toggleMenu() {
  //   var menu = document.getElementById("menu");
  //   if (menu.style.display === "block") {
  //     menu.style.display = "none";
  //   } else {
  //     menu.style.display = "block";
  //   } 
  // }

  let hamburger = document.getElementById("hamburger");
  let menu = document.getElementById("menu");
    hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  });

/* アコーディオン */
  
/*スライダー */
  
