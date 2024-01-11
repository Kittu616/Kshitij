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
