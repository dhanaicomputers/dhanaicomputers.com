burger = documen.querySelector('.burger')
navbar = documen.querySelector('.navbar')
navlist = documen.querySelector('.nav-list')
rightNav = documen.querySelector('.rightNav')



burger.addEventListener('click',()=>{
   rightNav.classlist.toggle('v-class-resp');
   navlist.classlist.toggle('v-class-resp');
   navbar.classlist.toggle('h-nav-resp');
})