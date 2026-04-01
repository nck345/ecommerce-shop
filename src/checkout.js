// src/checkout.js - Xử lý thanh toán 
 
function formatPrice(amount) { 
    return amount.toLocaleString('vi-VN') + 'đ'; 
} 
 
function validateForm(formData) { 
    if (!formData.fullname || !formData.address || !formData.phone) { 
        return false; 
    } 
    return true; 
} 
 
function submitOrder(formData) { 
    if (!validateForm(formData)) { 
        alert('Vui lòng điền đầy đủ thông tin!'); 
        return; 
    } 
    alert('Đặt hàng thành công! Cảm ơn ' + formData.fullname); 
} 
 
// Fix: hiển thị giá đúng 
const checkoutTotal = 300000; 
document.getElementById('checkout-total').textContent = formatPrice(checkoutTotal); 
 
document.getElementById('checkout-form').addEventListener('submit', function(e) { 
    e.preventDefault(); 
    const formData = { 
        fullname: this.fullname.value, 
        address: this.address.value, 
        phone: this.phone.value 
    }; 
    submitOrder(formData); 
});