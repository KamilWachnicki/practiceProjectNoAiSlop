async function AppendEvents() {
    try {
        const response = await fetch("../../data/events.json");
        const data = await response.json();

        const wrapper = document.getElementById("dataWrapper");
        wrapper.innerHTML = "";

        data.forEach(e => {
            const title = document.createElement("h3");
            title.textContent = e.name;

            const para = document.createElement("p");
            para.textContent = e.description;

            wrapper.appendChild(title); f
            wrapper.appendChild(para);
        });
    } catch (err) {
        console.error("Error loading events:", err);
    }
}
AppendEvents();