const the_animation = document.querySelectorAll('.card-text')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
        else {
            entry.target.classList.remove('scroll-animation')
        }

    })
},
    {
        threshold: 0.5
    });
//
for (let i = 0; i < the_animation.length; i++) {
    const elements = the_animation[i];

    observer.observe(elements);
} 


window.addEventListener('scroll', () => {
  const verticalScrollPx = window.scrollY || window.pageYOffset;

  if (verticalScrollPx < 800) {
      document.body.style.backgroundColor = '#000000';
  }
   else if (verticalScrollPx > 800 && verticalScrollPx < 850) {
      document.body.style.backgroundColor = '#040404';
  }
   else if (verticalScrollPx >850 && verticalScrollPx < 900) {
      document.body.style.backgroundColor = '#080808';
  }
   else if (verticalScrollPx > 900 && verticalScrollPx < 950) {
      document.body.style.backgroundColor = '#0c0c0c';
  } 
});