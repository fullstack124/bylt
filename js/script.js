const sidebar = document.getElementById('sidebar');
const show_sidebar = document.getElementById('show_sidebar');

show_sidebar.addEventListener('click', function () {
    sidebar.classList.remove('hidden')
    sidebar.classList.add('block')
})

closed_sidebar.addEventListener('click', function () {
    sidebar.classList.add('hidden')
    sidebar.classList.remove('block')
})


const our_model_hide=document.querySelector('#our_model_hide');
const payment_model=document.querySelector('#payment_model');
const show_payment_model=document.querySelector('#show_payment_model');

show_payment_model.addEventListener('click',function(e){
    e.preventDefault();
    payment_model.classList.add('block');
    payment_model.classList.remove('hidden');
});

our_model_hide.addEventListener('click',function(e){
    e.preventDefault();
    payment_model.classList.remove('block');
    payment_model.classList.add('hidden');
});

const main_content_dropdown = document.querySelectorAll('.main_content_dropdown');
const value_dropdown = document.querySelector('#value_dropdown');
let dropdown_value ='';
value_dropdown.addEventListener('change', function () {
    dropdown_value = value_dropdown.value;
    main_content_dropdown.forEach(val => {
        console.log(dropdown_value);
        if (val.getAttribute('id') == dropdown_value) {
            console.log(true);
            val.classList.add('grid')
            val.classList.remove('hidden')
        }else{
            console.log('false')
            val.classList.add('hidden')
            val.classList.remove('grid')
        }
    });
})
console.log(dropdown_value)
