var swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });

///menu media

  function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;
  
    tabItem.forEach(function (item) {
      item.classList.remove('tabs__btn-item--active');
    });
  
    tabTarget.classList.add('tabs__btn-item--active');
  
  tabContent.forEach(function(item){
  item.classList.remove('tabs__content-item--active');
  });
  
  document.querySelector(`#${button}`).classList.add
  ('tabs__content-item--active');
  }

  const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.up__container-list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('up__container-list--active');
});



///scrool up

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
btnUp.addEventListener();