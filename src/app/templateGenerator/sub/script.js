const params = new URLSearchParams(window.location.search);
const name = params.get('name') || 'Unknown';
const pointer = params.get('pointer');

document.getElementById('name').textContent = name;

new QRCode(document.getElementById("qrcode"), {
    text: decodeURIComponent(pointer), // decode before using
    width: 160,
    height: 160
});

window.print()