const sidebar = document.getElementById('sidebar');
const show_sidebar = document.getElementById('show_sidebar');
const closed_sidebar = document.getElementById('closed_sidebar');
let touchStartX = 0;
let touchEndX = 0;
sidebar.addEventListener('touchstart', handleTouchStart, false);
sidebar.addEventListener('touchmove', handleTouchMove, false);

show_sidebar.addEventListener('click', function () {
    sidebar.classList.remove('hidden');

    sidebar.classList.add('block', 'slide-in');
});

closed_sidebar.addEventListener('click', function () {
    sidebar.classList.remove('slide-in');
    sidebar.classList.add('slide-out');
    // Delay hiding the sidebar to allow the animation to complete
    setTimeout(() => {
        sidebar.classList.add('hidden');
        sidebar.classList.remove('block', 'slide-out');
    }, 300); // Adjust the duration based on your CSS transition duration
});



function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    touchMoveX = event.touches[0].clientX;

    const touchDiff = touchStartX - touchMoveX;

    if (touchDiff > 0) {
        // Swipe left, slide out
        sidebar.style.transform = `translateX(${Math.max(-100, -touchDiff)}%)`;
    } else {
        // Swipe right, slide in
        sidebar.style.transform = `translateX(${Math.min(0, -touchDiff)}%)`;
    }
}

sidebar.addEventListener('touchend', function () {
    const touchDiff = touchStartX - touchMoveX;

    if (touchDiff > 50) {
        // Swipe left detected, slide out
        sidebar.classList.remove('slide-in');
        sidebar.classList.add('slide-out');
        setTimeout(() => {
            sidebar.classList.add('hidden');
            sidebar.classList.remove('block', 'slide-out');
        }, 300); // Adjust the duration based on your CSS transition duration
    } else {
        // Not a significant swipe, toggle visibility
        if (sidebar.classList.contains('hidden')) {
            sidebar.classList.remove('hidden', 'slide-out');
            sidebar.classList.add('block', 'slide-in');
        } else {
            sidebar.classList.remove('slide-in');
            sidebar.classList.add('slide-out');
            setTimeout(() => {
                sidebar.classList.add('hidden');
                sidebar.classList.remove('block', 'slide-out');
            }, 300);
        }
    }

    // Reset touch tracking variables
    touchStartX = 0;
    touchMoveX = 0;
    sidebar.style.transform = ''; // Reset transform property
});




const our_model_hide = document.querySelector('#our_model_hide');
const payment_model = document.querySelector('#payment_model');
const show_payment_model = document.querySelector('#show_payment_model');

show_payment_model.addEventListener('click', function (e) {
    e.preventDefault();
    payment_model.classList.add('block');
    payment_model.classList.remove('hidden');
});

our_model_hide.addEventListener('click', function (e) {
    e.preventDefault();
    payment_model.classList.remove('block');
    payment_model.classList.add('hidden');
});

const main_content_dropdown = document.querySelectorAll('.main_content_dropdown');
const value_dropdown = document.querySelector('#value_dropdown');
let dropdown_value = '';
value_dropdown.addEventListener('change', function () {
    dropdown_value = value_dropdown.value;
    main_content_dropdown.forEach(val => {
        console.log(dropdown_value);
        if (val.getAttribute('id') == dropdown_value) {
            console.log(true);
            val.classList.add('grid')
            val.classList.remove('hidden')
        } else {
            console.log('false')
            val.classList.add('hidden')
            val.classList.remove('grid')
        }
    });
})
console.log(dropdown_value)
