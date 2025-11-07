const querySelector = document.querySelector.bind(document)
const createElement = document.createElement.bind(document)

async function read() {
    const container = document.getElementById('cardsContainer');
    try {
        const res = await fetch("../../data/people.json")
        const data = await res.json()
        data.forEach(person => {
            const card = document.createElement('a');
            card.className = 'personCard';
            card.href = `${person.Surname.toLowerCase()}.html`;

            card.innerHTML = 
            `
            <img src="../../images/${person.imageFolder}_medium.jpg" alt="${person.Name} ${person.Surname}">
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