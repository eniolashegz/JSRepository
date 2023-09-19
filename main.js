const input = document.querySelector('.email');
const err = document.getElementById('error');
const btn = document.getElementById('btn');
const placeholder = input.getAttribute('placeholder');

function handleSubmit(e) {
  e.preventDefault();
  const email = input.value.trim();

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.length < 1) {

        // Email is not valid, display error message and style the input as red
        err.textContent = 'Email is reqiured!';
        input.classList.add('error-input');
        err.classList.add('error');
        reset(2000)
        
    
  } else if(emailRegex.test(email)){
    // Email is valid, remove error message and allow form submission
    err.textContent = '';
    input.classList.remove('error');
    // Redirect to success.html (You can change this URL as needed)
    window.location.href = 'success.html';


  } else {
    // Email is not valid, display error message and style the input as red
    err.textContent = 'Enter a valid email address.';
    input.classList.add('error-input');
    err.classList.add('error');
    reset(6000)
  }
}

function reset(time){
    setTimeout(()=>{
        err.textContent = '';
        input.classList.remove('error-input');
        err.classList.remove('error');
        input.value = '';
        }, time)
}

btn.addEventListener('click', handleSubmit);