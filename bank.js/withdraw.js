document.getElementById('withdraw').addEventListener('click', function () {
    const getWithdraw = document.getElementById('withdrawAmount');
    const withdrawAmountString = getWithdraw.value;
    //convert input into number
    const newWithdrawAmount = parseFloat(withdrawAmountString);
    if (isNaN(newWithdrawAmount)) {
        alert('Please enter ammount');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    const balanceTotalElement = document.getElementById('balanceTotal')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    getWithdraw.value = '';
    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Not enough Balance');
        return;
    }
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;



    // const balance = document.getElementById('balanceTotal');
    // const mainBalance = balance - withdrawAmount;
    // balance.innerText = mainBalance;
    getWithdraw.value = '';
})