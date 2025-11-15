function logout() {
    document.cookie = "loggedIn=; path=/; max-age=0";
    document.cookie = "isAdmin=; path=/; max-age=0";
    window.location.href = "index.html";
}
