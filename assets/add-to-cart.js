document.addEventListener('DOMContentLoaded', function () {

    const atcBtn = document.querySelectorAll('[data-add-to-cart]');

    atcBtn.forEach((btn) => {

        btn.addEventListener('click', (e) => {

            const prodId = parseInt(
                e.currentTarget.getAttribute('data-prod-id')
            );

            if (prodId) {
                addToCart(prodId, 1);
            }

        });

    });

    async function addToCart(prodId, quantity) {

        try {

            const response = await fetch('/cart/add.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    items: [
                        {
                            id: prodId,
                            quantity: quantity ? quantity : 1
                        }
                    ]
                })
            });

            const data = await response.json();

            console.log('Added to cart:', data);

            alert('Product added to cart');

        } catch (error) {

            console.error(error);

        }

    }

});