
function calc() {
    let amount = prompt("Enter amount");

    let rate = prompt("Enter interest rate (%)");

    let months = prompt("Enter months to pay");

    const laiSuatHangThang = (amount * (rate * 0.01)) / months;
    const traMotThang = ((amount / months) + laiSuatHangThang).toFixed(2);
    alert("So tien phai tra " + traMotThang);
    console.log(traMotThang);
}

calc();