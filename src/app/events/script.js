const querySelector = document.querySelector.bind(document)
const createElement = document.createElement.bind(document)

async function read(acceptedName = ' ') {
    const container = querySelector('#cardsContainer');
    try {
        const res = await fetch("/src/data/events.json")
        const data = await res.json()
        data.forEach(e => {
            if (acceptedName !== ' ' && !(`${e.name}`.toLowerCase().includes(acceptedName.toLowerCase()))) {
                return;
            }
            const card = createElement('a');
            card.className = 'eventCard';
            card.href = `./sub/${e.id}.html`;

            card.innerHTML =
            `
            <img src="/src/images/events/${e.id}/medium.jpg" alt="${e.name}">
            <div class="eventInfo">
                <h2>${e.name} ${e.start_date} - ${e.end_date}</h2>
                <h3>${e.location}</h3>
                <p>${e.description}</p>
            </div>
            `
            container.appendChild(card)
        })
    }
    catch (error) {
        console.error(error)
    }
}
read()

querySelector('#searchInput').addEventListener('keydown', (e) => {
    if (e.key !== 'Enter')
        return;
    const container = querySelector('#cardsContainer');
    container.innerHTML = '';
    read(e.target.value.trim());
});
