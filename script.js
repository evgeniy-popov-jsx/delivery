let animItems = document.querySelectorAll("._anim-item");

if (animItems.length > 0 ) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for ( let i = 0; i < animItems.length; i++ ) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 2;

            let animItemPoint = window.innerHeight - ( animItemHeight / animStart );

            if ( animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - ( window.innerHeight / animStart );
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');
            }
        } 
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return {
            top: rect.top + scrollTop, 
            left: rect.left + scrollLeft
        }
    }
}