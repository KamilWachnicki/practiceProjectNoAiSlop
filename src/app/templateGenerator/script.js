const querySelector = document.querySelector.bind(document)
const createElement = document.createElement.bind(document)

async function read(acceptedName = ' ') {
    const container = querySelector('#cardsContainer');
    try {
        const res = await fetch("/src/data/people.json")
        const data = await res.json()
        console.log("tried")
        data.forEach(person => {
            if (acceptedName !== ' ' && !(`${person.Name} ${person.Surname}`.toLowerCase().includes(acceptedName.toLowerCase()))) {
                return;
            }
            const card = createElement('a');
            card.className = 'personCard';
            card.href = `./sub/${person.Name}_${person.Surname}.html`.replaceAll(' ', '_');

            card.innerHTML =
                `
            <img src="/src/images/people/${person.imageFolder}/medium.jpg" alt="${person.Name} ${person.Surname}">
            <div class="personInfo">
                <h2>${person.Name} ${person.Surname}</h2>
                <h3>${person.Category}</h3>
                <p>${person.Description}</p>
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
