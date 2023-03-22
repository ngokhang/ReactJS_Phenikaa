let h1Ele = document.querySelector('.title') as HTMLElement;
const btnChange = document.getElementById('btnChange') as HTMLElement;

btnChange.addEventListener('click', e => {
  e.preventDefault();
  h1Ele.textContent = 'hello'
})