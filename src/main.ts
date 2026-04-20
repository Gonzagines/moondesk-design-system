import './style.css'

document.querySelector<HTMLDivElement>('#app')!

const loginForm = document.querySelector<HTMLFormElement>('#login-form');

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = loginForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Authenticating...';
      (submitBtn as HTMLButtonElement).disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        submitBtn.textContent = originalText;
        (submitBtn as HTMLButtonElement).disabled = false;
        alert('MoonDesk: Logic would go here. UI implementation verified!');
      }, 1500);
    }
  });
}
