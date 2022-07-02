
// / Deposit and withdraw
// get deposit & withdraw & balance id
const depositInputId = document.getElementById('deposit-id')
const withdrawInputId = document.getElementById('withdraw')
const balanceId = document.getElementById('balance-value')

// get deposit and withdraw btn
const withdrawBtn = document.getElementById('withdraw-btn')
const depositBtn = document.getElementById('deposit-btn')

depositBtn.addEventListener('click', function () {

    const depositValue = depositInputId.value;

    // Handle empty input
    if (depositValue === '') {
        alert('Input can not be empty')
        return;
    }
    // Error handling if users not enter any number
    if ((depositInputId.value.match(/[a-zA-Z]/))) {
        alert('Please enter a number');
        depositInputId.value = '';
        return;
    }
    const depositValueNumber = parseFloat(depositValue);

    // Error handling if users enter any positive number
    if (depositValueNumber < 0) {
        alert('Please enter a positive number');
        depositInputId.value = '';
        return;
    }

    const totalDeposit = document.getElementById('total-deposit');
    const dipositaddNumber = parseFloat(totalDeposit.innerText)
    const newUpdateDeposit = depositValueNumber + dipositaddNumber;
    totalDeposit.innerText = newUpdateDeposit;

    // balance calculation
    let balanceValueNumber = parseFloat(balanceId.innerText);
    let newBalance = balanceValueNumber + depositValueNumber;
    balanceId.innerText = newBalance

    // clear deposit input
    depositInputId.value = '';
})

withdrawBtn.addEventListener('click', function () {

    const withdrawValue = withdrawInputId.value;
    console.log(withdrawInputId.value)

    // Handle empty input
    if (withdrawValue === '') {
        alert('Input can not be empty')
        return;
    }
    // Error handling if users not enter any number
    else if ((withdrawInputId.value.match(/[a-zA-Z]/))) {
        alert('Please enter a number');
        withdrawInputId.value = '';
        return;
    }

    const withdrawValueNumber = parseFloat(withdrawValue);
    // Error handling if users enter any positive number
    if (withdrawValueNumber < 0) {
        alert('Please enter a positive number');
        withdrawInputId.value = '';
        return;
    }

    // withdraw calculation
    const totalWithdraw = document.getElementById('total-withdraw');
    const previousWithdrawNumber = parseFloat(totalWithdraw.innerText);
    const totalCurrentWithdraw = withdrawValueNumber + previousWithdrawNumber;


    // balance calculation
    let balanceValueNumber = parseInt(balanceId.innerText);
    let newBalance = balanceValueNumber - withdrawValueNumber;
    if (newBalance < 0) {
        alert('You can not withdraw')
        withdrawInputId.value = '';
        return;
    }
    totalWithdraw.innerText = totalCurrentWithdraw;
    balanceId.innerText = newBalance;

    // clear withdraw input
    withdrawInputId.value = '';
})