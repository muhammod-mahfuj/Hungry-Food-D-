/* SHOW MENU */
var showMenu = function (navtoggle, navM) {
    var toggle = document.getElementById(navtoggle), navmenu = document.getElementById(navM);
    if (toggle && navmenu) {
        toggle.addEventListener("click", function () {
            navmenu.classList.toggle("show-menu");
        });
    }
};
showMenu("nav_toggle", "nav_menu");
/* REMOVE MOBLIE MENU */
var navLink = document.querySelectorAll(".nav-link");
function linkaction() {
    var navmenu = document.querySelector('#nav_menu');
    navmenu.classList.remove("show-menu");
}
navLink.forEach(function (n) { return n.addEventListener('click', linkaction); });
/*  SCROLL SECTIONS ACTIVE LINKS  */
// const sections = document.querySelectorAll('section[id]')
// function scrollActive(){
//     const scrollY = window.pageYOffset
//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight,
//               sectionTop = current.offsetTop - 50,
//               sectionId = current.getAttribute('id')
//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('#nav_menu a[href*=' + sectionId + ']').classList.add('active-links')
//         }else{
//             document.querySelector('#nav_menu a[href*=' + sectionId + ']').classList.remove('active-links')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)
/*         OR          */
// const sections = document.querySelectorAll("section[id]")
// function scrollActive(){
//     const scrollY = window.pageYOffset
//     sections.forEach(current =>{
//          const sectionHeight = current.offsetHeight,
//                sectionTop  = current.offsetTop - 50,
//                sectionId  = current.getAttribute('id')
//                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//                    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
//                }else{
//                    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
//                }
//     })
// }
// window.addEventListener("scroll", scrollActive);
/* CHANGE BACKGROUND HEADER  */
function scrollheader() {
    var header = document.getElementById('header');
    if (this.scrollY >= 80)
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollheader);
/*    SHOW SCROLL UP   */
function scrollUp() {
    var scrollup = document.getElementById('scroll-up');
    if (this.scrollY >= 560)
        scrollup.classList.add('show-scroll');
    else
        scrollup.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
/*  DARK/LIGHT THEME    */
var themeButton = document.getElementById('theme-button');
var darkTheme = 'dark-theme';
var iconTheme = 'bx-toggle-right';
// // Previously selected topic (if user selected)
var selectedTheme = localStorage.getItem('selected-theme');
var selectedIcon = localStorage.getItem('selected-icon');
// // We obtain the current theme that the interface has by validating the dark-theme class
var getCurrentTheme = function () { return document.body.classList.contains(darkTheme) ? 'dark' : 'light'; };
var getCurrentIcon = function () { return themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'; };
// // We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme);
}
// // Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', function () {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
