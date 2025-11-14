async function login() {
    const usrname = document.getElementById("usrname").value;
    const passw = document.getElementById("passw").value;

    const res = await fetch("/src/data/login.json");
    const data = await res.json();

    const user = data.find(e => e.username === usrname && e.password === passw);

    if (user) {
        document.cookie = `loggedIn=true; path=/; max-age=86400`;
        if (user.role === "admin") {
            document.cookie = `isAdmin=true; path=/; max-age=86400`;
            window.location.reload();
        } else {
            document.cookie = `isAdmin=false; path=/; max-age=86400`;
            window.location.reload();
        }
        document.getElementById("loginplaceholder").innerHTML = "login success";
        return;
    }

    document.getElementById("loginplaceholder").innerHTML = "login fail";
}