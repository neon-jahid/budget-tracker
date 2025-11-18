const form = document.querySelector('.transaction-form');

let transactions = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const transaction = {
        source: form.source.value,
        amount: form.amount.value,
    };
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    form.reset();
});
