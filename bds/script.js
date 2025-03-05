function calculateRent() {
    // Lấy giá trị từ các trường input
    const unitPrice = parseFloat(document.getElementById('unitPrice').value) * 1000000;
    const area = parseFloat(document.getElementById('area').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100; // Chuyển % thành số thập phân
    const value = unitPrice * area 

    // Tính f1 và f2 theo công thức
    const f1 = value / 50 / 12;
    const f2 = (value * interestRate) / 12;

    // Tính giá thuê
    const rent = f1 + f2;

    // Hiển thị kết quả
    document.getElementById('result').innerText = `Giá trị căn nhà: ${value.toLocaleString('vi-VN')} VNĐ\n\nGiá thuê hàng tháng: ${rent.toLocaleString('vi-VN')} VNĐ`;
}