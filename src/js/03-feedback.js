import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const saveFormState = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

const loadFormState = () => {
  const storedState = localStorage.getItem('feedback-form-state');
  if (storedState) {
    const formState = JSON.parse(storedState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
};

const submitForm = (event) => {
  event.preventDefault();
  
  const formState = {
    email: emailInput.value,
    message: messageInput.value
  };
  
  console.log(formState);
  
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
};

feedbackForm.addEventListener('input', saveFormState);
window.addEventListener('load', loadFormState);
feedbackForm.addEventListener('submit', submitForm);

