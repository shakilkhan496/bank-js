// step :1 add event listener to the deposit button
document.getElementById('deposit').addEventListener('click', function () {
    //step :2 -> get deposit amount from input field
    //for input field use .value to the value inside the input field
    const getDeposit = document.getElementById('depositAmount');
    const newDepositAmountString = getDeposit.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    if (isNaN(newDepositAmount)) {
        alert('Please provide valid amount')
        return;
    }

    // step:3 >> get the current deposit total amount

    //for non-input (elemeent other than input textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step 4 : > add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    //set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step : 5 > get balance current total
    const balanceTotalElement = document.getElementById('balanceTotal');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    // stp 6 > calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;


    //step:7 >clear the field after deposit
    getDeposit.value = '';
})