function getCookie(name) {
    return document.cookie.split("; ").find(row => row.startsWith(name + "="))?.split("=")[1];
}

window.addEventListener("DOMContentLoaded", () => {
    const isAdmin = getCookie("isAdmin");
    const loggedIn = getCookie("loggedIn");

    const btn = document.getElementById("qrAdminButton");
    const btn2 = document.getElementById("logoutBtn");
    const btn3 = document.getElementById("loginBtn");
    if (isAdmin === "true") {
        btn.style.display = "";
    } else {
        btn.style.display = "none";
    }
    if (loggedIn === "true") {
        btn2.style.display = "";
    } else {
        btn2.style.display = "none";
    }
    if (loggedIn === "true") {
        btn3.style.display = "none";
    } else {
        btn3.style.display = "";
    }
});