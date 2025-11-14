function getCookie(name) {
    return document.cookie.split("; ").find(row => row.startsWith(name + "="))?.split("=")[1];
}

window.addEventListener("DOMContentLoaded", () => {
    const isAdmin = getCookie("isAdmin");

    const btn = document.getElementById("qrAdminButton");
    if (isAdmin === "true") {
        btn.style.display = "";
    } else {
        btn.style.display = "none";
    }
});