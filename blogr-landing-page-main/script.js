const accordion =  document.getElementsByClassName("dropdown");
const mobileNav = document.querySelector('.mobile-nav');
let menuOpen = false;

  for (i = 0; i < accordion.length; i++){
      accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
      })
  }

  mobileNav.addEventListener('click', () =>{
    if(!menuOpen){
      mobileNav.classList.add('open')
      menuOpen = true
    }else{
      mobileNav.classList.remove('open')
      menuOpen = false
    }
  })