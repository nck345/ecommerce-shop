 
function calculateTotal(items) { 
    let total = 0; 
    for (const item of items) { 
        total += item.price * item.quantity; 
    } 
    return total; 
} 
 
function formatPrice(amount) { 
    return amount.toLocaleString('vi-VN') + 'đ'; 
} 
 
// Dữ liệu mẫu 
const cartItems = [ 
    { name: 'Áo thun basic', price: 150000, quantity: 2 } 
]; 
 
const total = calculateTotal(cartItems); 
document.getElementById('total').textContent = formatPrice(total);