const startButton = document.getElementById('startButton');
const container = document.querySelector('.container');
const popup = document.getElementById('popup');
const continueButton = document.getElementById('continueButton');

function startHeartbeat() {
    // Kiểm tra nếu đã ở trạng thái beating
    if (container.classList.contains('show-right')) return;

    startButton.style.display = 'none'; // Ẩn nút start
    startButton.disabled = true; // Vô hiệu hóa nút để ngăn nhấn liên tiếp

    // Hiển thị đường nhịp tim bên trái
    container.classList.add('show-left');

    setTimeout(() => {
        // Hiển thị trái tim
        container.classList.add('show-heart');
    }, 2000); // Hiển thị trái tim sau 2 giây

    setTimeout(() => {
        // Hiển thị đường nhịp tim bên phải
        container.classList.add('show-right');
    }, 3000); // Hiển thị đường bên phải sau 6 giây

    // Sau khi tất cả animation hoàn tất, hiển thị popup
    setTimeout(() => {
        // Hiển thị lại nút
        startButton.style.display = 'inline-block';
        startButton.disabled = false; // Kích hoạt lại nút

        // Hiển thị popup
        popup.style.display = 'block';
        setTimeout(() => {
            popup.style.opacity = 1; // Làm popup hiện lên với hiệu ứng mờ dần
        }, 10); // Đảm bảo popup hiển thị sau khi style được áp dụng
    }, 8000); // Đợi cho đến khi tất cả animation kết thúc (8 giây)
}

// Sự kiện click cho nút
startButton.addEventListener('click', startHeartbeat);

// Sự kiện click cho nút "Tiếp tục"
continueButton.addEventListener('click', () => {
    // Chuyển hướng đến trang totinh.html
    window.location.href = 'totinh.html';
});
