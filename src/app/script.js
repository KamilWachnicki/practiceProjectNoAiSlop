const qs = document.querySelector.bind(document);

async function read(category) {
    const endpoints = {
        people: "/src/data/people.json",
        events: "/src/data/events.json"
    };

    const toLoad = category === "all" ? Object.keys(endpoints) : [category];

    const results = {};
    for (const cat of toLoad) {
        const res = await fetch(endpoints[cat]);
        results[cat] = await res.json();
    }
    return results;
}

const map = L.map('map').setView([50.244, 21.768], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

let leafletMarkers = [];

function clearMarkers() {
    leafletMarkers.forEach(m => map.removeLayer(m));
    leafletMarkers = [];
}

async function appendLeaflets(category, searchText) {
    clearMarkers();

    const data = await read(category);
    const text = searchText.toLowerCase();

    // PEOPLE
    if (data.people) {
        data.people.forEach(person => {
            const fullName = `${person.Name} ${person.Surname}`.toLowerCase();
            if (!fullName.includes(text)) return;

            const { lat, lon } = person.location;

            const marker = L.marker([lat, lon]).addTo(map);
            leafletMarkers.push(marker);

            const personURL = `/src/app/people/sub/${person.imageFolder}.html`;

            marker.bindPopup(`
            <div style="font-family: Poppins; width: 230px;">
                <h3 style="margin-bottom: 6px; color:#005C97; font-size:1.2rem;">
                    ${person.Name} ${person.Surname}
                </h3>
                <p style="margin: 4px 0; color:#363795;">
                    ${person.Category}
                </p>
                <p style="margin: 6px 0; color:#555; font-size:0.95rem;">
                    ${person.Description.substring(0, 120)}...
                </p>
                <a href="${personURL}" 
                   style="display:inline-block; margin-top:10px; padding:8px 14px; 
                          background:#005C97; color:white; border-radius:6px; 
                          text-decoration:none; font-size:0.9rem;">
                    Zobacz stronę
                </a>
            </div>
        `);
        });
    }

    // EVENTS
    if (data.events) {
        data.events.forEach(event => {
            const eventName = event.name.toLowerCase();
            if (!eventName.includes(text)) return;

            const { lat, lon } = event.geo;

            const marker = L.marker([lat, lon]).addTo(map);
            leafletMarkers.push(marker);

            const eventURL = `/src/app/events/sub/${event.id}.html`;

            marker.bindPopup(`
            <div style="font-family: Poppins; width: 230px;">
                <h3 style="margin-bottom: 6px; color:#005C97; font-size:1.2rem;">
                    ${event.name}
                </h3>
                <p style="margin: 6px 0; color:#555; font-size:0.95rem;">
                    ${event.description.substring(0, 120)}...
                </p>
                <p style="margin: 4px 0; color:#363795;">
                    ${event.start_date} → ${event.end_date}
                </p>
                <a href="${eventURL}" 
                   style="display:inline-block; margin-top:10px; padding:8px 14px; 
                          background:#005C97; color:white; border-radius:6px; 
                          text-decoration:none; font-size:0.9rem;">
                    Zobacz stronę
                </a>
            </div>
        `);
        });
    }
}

qs("#templateSearchButton").addEventListener("click", () => {
    const txt = qs("#templateSearchInput").value;
    const cat = qs("#categorySelect").value;
    appendLeaflets(cat, txt);
});

qs("#templateSearchInput").addEventListener("keydown", e => {
    if (e.key === "Enter") {
        const txt = e.target.value;
        const cat = qs("#categorySelect").value;
        appendLeaflets(cat, txt);
    }
});

qs("#categorySelect").addEventListener("change", () => {
    const txt = qs("#templateSearchInput").value;
    const cat = qs("#categorySelect").value;
    appendLeaflets(cat, txt);
})

appendLeaflets("all", "");
