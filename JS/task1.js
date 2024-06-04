document.addEventListener('DOMContentLoaded', () => {
    const cartSummary = document.querySelector('.cart-summary');
    const totalAmount = document.querySelector('.total-amount');
    const checkoutButton = document.querySelector('.checkout');
    const emptyCartButton = document.querySelector('.empty-cart');
    const bookItems = document.querySelectorAll('.book-item');

    function updateCart() {
        const cartItems = document.querySelectorAll('.book-item');
        let total = 0;
        let itemCount = 0;

        cartItems.forEach(item => {
            const quantity = parseInt(item.querySelector('.count').textContent);
            const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
            total += quantity * price;
            itemCount += quantity;
        });

        cartSummary.textContent = `${itemCount} items`;
        totalAmount.textContent = total.toFixed(2);

        if (itemCount === 0) {
            checkoutButton.disabled = true;
            emptyCartButton.disabled = true;
        } else {
            checkoutButton.disabled = false;
            emptyCartButton.disabled = false;
        }
    }

    bookItems.forEach(item => {
        const decreaseButton = item.querySelector('.decrease');
        const increaseButton = item.querySelector('.increase');
        const deleteButton = item.querySelector('.delete');
        const countElement = item.querySelector('.count');

        decreaseButton.addEventListener('click', () => {
            let count = parseInt(countElement.textContent);
            if (count > 0) {
                count--;
                countElement.textContent = count;
                if (count === 0) {
                }
                updateCart();
            }
        });

        increaseButton.addEventListener('click', () => {
            let count = parseInt(countElement.textContent);
            count++;
            countElement.textContent = count;
            updateCart();
        });

        deleteButton.addEventListener('click', () => {
            item.remove();
            updateCart();
        });
    });

    emptyCartButton.addEventListener('click', () => {
        bookItems.forEach(item => item.remove());
        updateCart();
    });

    updateCart();
});
