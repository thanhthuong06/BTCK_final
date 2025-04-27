document.getElementById("ct9").addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("Message").value,
        timestamp: new Date().toISOString()
    };

    // Lấy danh sách cũ (nếu có)
    const messages = JSON.parse(localStorage.getItem("messages")) || [];

    // Thêm dữ liệu mới
    messages.push(formData);

    // Lưu lại vào localStorage
    localStorage.setItem("messages", JSON.stringify(messages));

    alert("Message saved locally!");
    // this.reset();
    var newWindow = window.open("", "_blank");
    newWindow.document.write(`
        <html>
        <head>
            <title>Thông tin khách hàng</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { color:rgb(165, 168, 170); }
                ul { list-style-type: none; padding: 0; }
                li { margin-bottom: 10px; }
                hr { border: 0; height: 1px; background-color: #ddd; margin: 10px 0; }
            </style>
        </head>
        <body>
            <h1>Thông tin khách hàng</h1>
            <ul>
                ${messages.map(payment => `
                    <li><b>name:</b> ${payment.name}</li>
                    <li><b>email:</b> ${payment.email}</li>
                    <li><b>subject:</b> ${payment.subject}</li>
                    <li><b>message:</b> ${payment.message}</li>
                    <li><b>timestamp:</b> ${payment.timestamp}</li>
                    <hr>
                `).join('')}
            </ul>
        </body>
        </html>
    `);
    newWindow.document.close(); // Kết thúc ghi nội dung vào trang mới
});