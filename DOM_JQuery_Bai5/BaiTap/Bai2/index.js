const calcForm = document.getElementById('calcForm');
const amountMoneyInput = document.querySelector('#amountMoney');
const interestInput = document.querySelector('#interest');
const timeInput = document.querySelector('#time');
const buttonSubmit = document.querySelector('.btn');
const buttonReset = document.querySelector('.btn-danger');
const moneyMonthDaily = document.querySelector('.moneyMonthDaily');
const totalAmount = document.querySelector('.totalAmount');
const totalInterest = document.querySelector('.totalInterest');

const handleResetClick = () => {
  amountMoneyInput.value = '';
  interestInput.value = '';
  timeInput.value = '';
  moneyMonthDaily.value = '';
  totalAmount.value = '';
  totalInterest.value = '';
}

const handleButtonClick = () =>{
  const interestValue = Number.parseFloat(interestInput.value)/100;
  const amountMoneyValue = Number.parseFloat(amountMoneyInput.value);
  const timeValue = Number.parseInt(timeInput.value);
  const moneyDaily = amountMoneyValue * interestValue /(1 - 1 / Math.pow(1 + interestValue, timeValue));
  moneyMonthDaily.value = moneyDaily.toFixed(2);
  const totalMoney = moneyDaily * timeValue;
  totalAmount.value = totalMoney.toFixed(2);
  const tienLaiPhaiTra = totalMoney - amountMoneyValue;
  totalInterest.value = tienLaiPhaiTra.toFixed(2);
  // console.log(tienLaiPhaiTra);
}

calcForm.addEventListener('submit', e => {
  e.preventDefault();
  handleButtonClick();
});

buttonReset.addEventListener('click', e => {
  e.preventDefault();
  render();
})

function render() {
  handleResetClick();
}

function intitalApp() {
  render();
}
intitalApp();