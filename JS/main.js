/*ハンバーガーメニュー */
  
let hamburger = document.getElementById("hamburger");
let menu = document.getElementById("menu");

  hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

let menu_lists = document.querySelectorAll(".menu_list");

menu_lists.forEach(menu_list => {
menu_list.addEventListener('click', () =>{
hamburger.classList.remove("active");
menu.classList.remove("active");
});
});        


/*スライダー */

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  loop: true, // ループ機能を有効にする
});

  

/* アコーディオン */

let history_buttons = document.querySelectorAll(".accordion_button");
let history_content = document.getElementById("accordion_content");
let accordion_button = document.getElementById("accordion_button_id");

history_buttons.forEach(button => {
button.addEventListener('click', () =>{
history_content.classList.toggle("active");
accordion_button.classList.toggle("aaaaa");
});
});    


  
