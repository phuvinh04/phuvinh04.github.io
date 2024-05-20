document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Tin nhắn của bạn đã được gửi. Cảm ơn bạn đã liên hệ!');
        // Ở đây bạn có thể thêm mã để gửi dữ liệu đến máy chủ nếu cần.
        this.reset();
    } else {
        alert('Vui lòng điền đầy đủ thông tin.');
    }
});
