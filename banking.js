
// / Deposit and withdraw
// get deposit & withdraw & balance id
const depositInputId = document.getElementById('deposit-id')
const withdrawInputId = document.getElementById('withdraw')
const balanceId = document.getElementById('balance-value')

// get deposit and withdraw btn
const withdrawBtn = document.getElementById('withdraw-btn')
const depositBtn = document.getElementById('deposit-btn')

depositBtn.addEventListener('click', function () {
    // console.log(877);
    const depositValue = depositInputId.value;
    const depositValueNumber = parseInt(depositValue)
    // console.log(depositValue)
    const totalDeposit = document.getElementById('total-deposit');
    // totalDeposit.innerText=depositValue;
    const dipositaddNumber = parseFloat(totalDeposit.innerText)
    const newUpdateDeposit = depositValueNumber + dipositaddNumber;
    totalDeposit.innerText = newUpdateDeposit;

    // balance calculation
    let balanceValueNumber = parseInt(balanceId.innerText);
    
    let newBalance=balanceValueNumber+depositValueNumber ;
    balanceId.innerText=newBalance

    depositInputId.value = '';
})

withdrawBtn.addEventListener('click', function () {
    // console.log(8776)
    const withdrawValue = withdrawInputId.value;
    const withdrawValueNumber = parseInt(withdrawValue);
    // console.log(withdrawValue)
    const totalWithdraw = document.getElementById('total-withdraw');
    const previousWithdrawNumber = parseInt(totalWithdraw.innerText);
    const totalCurrentWithdraw = withdrawValueNumber + previousWithdrawNumber;

    totalWithdraw.innerText = totalCurrentWithdraw;

    // balance calculation
    let balanceValueNumber = parseInt(balanceId.innerText);
    let newBalance=balanceValueNumber-withdrawValueNumber ;
    balanceId.innerText=newBalance;
    withdrawInputId.value = '';
})