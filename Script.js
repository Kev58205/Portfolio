Set the starting wallet balance

let bankBalance = 1000;

// Function to update the displayed balance

function updateBalance() {

    document.getElementById('wallet-balance').innerText = bankBalance;

}

// Function to send money

function sendMoney() {

    const sendAmount = parseInt(document.getElementById('send-amount').value);

    // Check if the entered amount is valid

    if (isNaN(sendAmount) || sendAmount <= 0) {

        document.getElementById('transaction-status').innerText = 'Invalid amount to send!';

        return;

    }

    // Check if the balance is enough to send

    if (sendAmount > bankBalance) {

        document.getElementById('transaction-status').innerText = 'Insufficient balance to send!';

        return;

    }

    // Deduct the amount from the balance

    bankBalance = bankBalance-sendAmount;

    updateBalance();

    // Clear the input field and show success message

   document.getElementById('send-amount').value = '';

    document.getElementById('transaction-status').innerText = `Successfully sent $${sendAmount}`;

}

// Function to receive money

function receiveMoney() {

    const receiveAmount = parseInt(document.getElementById('receive-amount').value);

    // Check if the entered amount is valid

    if (isNaN(receiveAmount) || receiveAmount <= 0) {

        document.getElementById('transaction-status').innerText = 'Invalid amount to receive!';

        return;

    }

    // Add the amount to the balance

    bankBalance += receiveAmount;

    updateBalance();

    // Clear the input field and show success message

    document.getElementById('receive-amount').value = '';

    document.getElementById('transaction-status').innerText = `Successfully received $${receiveAmount}`;

}

// Add event listeners to buttons

document.getElementById('send-btn').addEventListener('click', sendMoney);

document.getElementById('receive-btn').addEventListener('click', receiveMoney);
