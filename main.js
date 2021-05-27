

const loanAmountInput = document.getElementById('loan-amount');
const interestInput = document.getElementById('interest');
const yearsInput = document.getElementById('years');
const button = document.getElementById('button');
const output = document.getElementById('output');

button.addEventListener('click', () => {

  const loanAmount = loanAmountInput.value;
  const interest = interestInput.value;
  const years = yearsInput.value;

  const finalAmount = calculateSimpleInterest(loanAmount, interest, years);

  output.innerHTML = "You will pay: $" + finalAmount;
});


function calculateSimpleInterest(principle, interest, years) {
  return principle * (1 + ((interest / 100) * years));
}