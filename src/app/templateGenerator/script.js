const querySelector = document.querySelector.bind(document)
const createElement = document.createElement.bind(document)

const category_json = {
    "events": "events.json",
    "people": "people.json"
}

const selected = ""

async function read(category, acceptedText = ' ') {
    const container = querySelector("#templatesList")
    container.innerHTML = ""
    try {
        const json_file = `/src/data/${category_json[category]}`
        const res = await fetch(json_file)
        const data = await res.json()
        console.log(data)
        data.forEach(element => {
            const name = element.Name || element.name || "Not found"
            const surname = element.Surname || ""
            const button = createElement("button")
            button.className = "nameCard"
            button.innerHTML = `<h2>${name}${surname}</h2>`
            container.appendChild(button)
        });
    }
    catch (error) {
        console.error(error)
    }
}

querySelector('#categorySelect').addEventListener('change', (e) => {
    const container = querySelector('#templatesList')
    container.innerHTML = ''
    console.log(e.target.value)
    read(e.target.value)
});


querySelector("#templateSearchButton").addEventListener("click", () => {
    const text = querySelector("#templateSearchInput").value.trim()
    if(text == ""){
        return
    }
    const category = querySelector("#categorySelect").value
    if(category == ""){
        return
    }
    read(category, text)
})
