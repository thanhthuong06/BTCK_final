
document.getElementById("billing-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Ngăn chặn hành động mặc định của form
    // Lấy dữ liệu từ các trường nhập liệu
    const payment = {
        firstName : document.getElementById("firstName").value,
        lastName : document.getElementById("lastName").value,
        country : document.getElementById("country").value,
        streetAddress : document.getElementById('street').value,
        apartment : document.getElementById('apt').value,
        townCity : document.getElementById('city').value,
        Postcode : document.getElementById('zip').value,
        Phone : document.getElementById('phone').value,
        Email : document.getElementById('email').value,
        
    };
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(payment);
    localStorage.setItem("messages", JSON.stringify(messages));
    // Mở trang mới và hiển thị dữ liệu ngay lập tức
    alert("Thông tin đã được lưu!");
    var newWindow = window.open("", "_blank");
    newWindow.document.write(`
        <html>
        <head>
            <title>Thông tin thanh toán</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { color:rgb(165, 168, 170); }
                ul { list-style-type: none; padding: 0; }
                li { margin-bottom: 10px; }
                hr { border: 0; height: 1px; background-color: #ddd; margin: 10px 0; }
            </style>
        </head>
        <body>
            <h1>Thông tin thanh toán</h1>
            <ul>
                ${messages.map(payment => `
                    <li><b>firstName:</b> ${payment.firstName}</li>
                    <li><b>lastName:</b> ${payment.lastName}</li>
                    <li><b>country:</b> ${payment.country}</li>
                    <li><b>Street Address:</b> ${payment.streetAddress}</li>
                    <li><b>Apartment:</b> ${payment.apartment}</li>
                    <li><b>Town/City:</b> ${payment.townCity}</li>
                    <li><b>Postcode:</b> ${payment.Postcode}</li>
                    <li><b>Phone:</b> ${payment.Phone}</li>
                    <li><b>Email:</b> ${payment.Email}</li>
                    <hr>
                `).join('')}
            </ul>
        </body>
        </html>
    `);
    newWindow.document.close(); // Kết thúc ghi nội dung vào trang mới
});