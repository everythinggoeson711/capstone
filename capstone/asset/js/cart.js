
  function updateCart() {
    const data = getData(); // sử dụng hàm getData() từ tệp api.js
    function renderCart() {
        const cart = getCart();
        const cartList = document.querySelector('#cartList');
        cartList.innerHTML = '';
      
        for (let item of cart) {
          const product = item.product;
      
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${product.id}</td>
            <td><img src="${product.image}" alt="${product.name}" width="50"></td>
            <td>${product.name}</td>
            <td>${item.size}</td>
            <td>${product.price}</td>
            <td>
              <button class="cart-item-decrease" data-product-id="${product.id}">-</button>
              <span>${item.quantity}</span>
              <button class="cart-item-increase" data-product-id="${product.id}">+</button>
            </td>
            <td>${item.quantity * product.price}</td>
            <td><button class="cart-item-remove" data-product-id="${product.id}">Remove</button></td>
          `;
          cartList.appendChild(row);
        }
      
        // Thêm sự kiện xóa sản phẩm khỏi giỏ hàng
        const removeButtons = document.querySelectorAll('.cart-item-remove');
        removeButtons.forEach(button => {
          button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            const cart = getCart();
            const itemIndex = cart.findIndex(item => item.product.id === productId);
      
            if (itemIndex !== -1) {
              cart.splice(itemIndex, 1);
              saveCart(cart);
              updateCartUI();
            }
          });
        });
      
        // Thêm sự kiện giảm số lượng sản phẩm
        const decreaseButtons = document.querySelectorAll('.cart-item-decrease');
        decreaseButtons.forEach(button => {
          button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            const cart = getCart();
            const item = cart.find(item => item.product.id === productId);
      
            if (item && item.quantity > 1) {
              item.quantity--;
              saveCart(cart);
              updateCartUI();
            }
          });
        });
      
        // Thêm sự kiện tăng số lượng sản phẩm
        const increaseButtons = document.querySelectorAll('.cart-item-increase');
        increaseButtons.forEach(button => {
          button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            const cart = getCart();
            const item = cart.find(item => item.product.id === productId);
      
            if (item) {
              item.quantity++;
              saveCart(cart);
              updateCartUI();
            }
          });
        });
      }
  }