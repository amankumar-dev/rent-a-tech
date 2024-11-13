
    // Fetch JSON data
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            // Get the product container
            const productContainer = document.getElementById('productContainer');

            // Loop through each product in the JSON data
            data.forEach(product => {
                // Create a product element
                const productElement = document.createElement('div');
                productElement.className = 'pro';

                // Construct HTML for the product
                productElement.innerHTML = `
                    <img src="${product.img}" alt="">
                    <div class="des">
                        <span>${product.brand}</span>
                        <h5>${product.name}</h5>
                        <h4>$${product.price}</h4>
                    </div>
                    <a href="#"><i class="fas fa-shopping-cart cart">Add To Cart</i></a>
                `;

                // Append the product element to the product container
                productContainer.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error fetching products:', error));


        
    // Fetch JSON data
    fetch('topproducts.json')
    .then(response => response.json())
    .then(data => {
        // Get the product container
        const productContainer = document.getElementById('topproductContainer');

        // Loop through each product in the JSON data
        data.forEach(product => {
            // Create a product element
            const productElement = document.createElement('div');
            productElement.className = 'pro';

            // Construct HTML for the product
            productElement.innerHTML = `
                <img src="${product.img}" alt="">
                <div class="des">
                    <span>${product.brand}</span>
                    <h5>${product.name}</h5>
                    <h4>$${product.price}</h4>
                </div>
                <a href="#"><i class="fas fa-shopping-cart cart">Add To Cart</i></a>
            `;

            // Append the product element to the product container
            productContainer.appendChild(productElement);
        });
    })
    .catch(error => console.error('Error fetching products:', error));


    document.addEventListener('DOMContentLoaded', function () {
        const productContainer = document.getElementById('productContainer');
    
        if (!productContainer) {
            console.error("Error: productContainer element not found.");
            return;
        }
    
        // Function to add a product to the cart
        function addToCart(product) {
            const cartContainer = document.getElementById('cartContainer');
            if (!cartContainer) {
                console.error("Error: cartContainer element not found.");
                return;
            }
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${product.img}" alt="">
                <div class="cart-item-details">
                    <h5>${product.name}</h5>
                    <p>$${product.price}</p>
                </div>
                <button class="remove-btn">Remove</button>
            `;
            
            cartContainer.appendChild(cartItem);
        }
    
        // Fetch JSON data for products
        fetch('products.json')
            .then(response => response.json())
            .then(data => {
                // Loop through each product in the JSON data
                data.forEach(product => {
                    // Create a product element
                    const productElement = document.createElement('div');
                    productElement.className = 'pro';
    
                    // Construct HTML for the product
                    productElement.innerHTML = `
                        <img src="${product.img}" alt="">
                        <div class="des">
                            <span>${product.brand}</span>
                            <h5>${product.name}</h5>
                            <h4>$${product.price}</h4>
                        </div>
                        <button class="add-to-cart-btn">Add To Cart</button>
                    `;
    
                    // Append the product element to the product container
                    productContainer.appendChild(productElement);
                });
    
                // Add event listener to each "Add to Cart" button
                const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
                addToCartButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        const productIndex = Array.from(addToCartButtons).indexOf(button);
                        addToCart(data[productIndex]);
                    });
                });
            })
            .catch(error => console.error('Error fetching products:', error));
    });


    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;

        // Create JSON object
        var formData = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };

        // Convert JSON object to string
        var formDataString = JSON.stringify(formData);

        // Create a blob with the JSON string
        var blob = new Blob([formDataString], { type: 'application/json' });

        // Create a link element to download the blob
        var a = document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = 'formData.json';
        a.click();
    });