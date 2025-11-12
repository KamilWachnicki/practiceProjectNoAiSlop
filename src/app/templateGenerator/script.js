const querySelector = document.querySelector.bind(document)
const createElement = document.createElement.bind(document)

const category_json = {
    "events": "events.json",
    "people": "people.json"
}

// Store selected values
const params = {
    category: "",
    name: "",
    pointer: ""
}

// Read JSON and render buttons
async function read(category, acceptedText = '') {
    const container = querySelector("#templatesList")
    container.innerHTML = ""

    if (!category_json[category]) return

    try {
        const json_file = `/src/data/${category_json[category]}`
        const res = await fetch(json_file)
        const data = await res.json()
        console.log(data)

        data.forEach(element => {
            const name = element.Name || element.name || ""
            const surname = element.Surname || ""
            const fullName = `${name} ${surname}`

            if (acceptedText && !fullName.toLowerCase().includes(acceptedText.toLowerCase())) return

            const button = createElement("button")
            button.className = "nameCard"
            button.innerHTML = `<h2>${fullName}</h2>`

            button.addEventListener("click", () => {
                params.category = category
                params.name = fullName

                if (category === "events") {
                    params.pointer = encodeURIComponent(`http://127.0.0.1:5500/src/app/${category}/sub/${element.id}.html`)
                } else if (category === "people") {
                    const safeName = encodeURIComponent(fullName.replaceAll(' ', '_'))
                    params.pointer = encodeURIComponent(`http://127.0.0.1:5500/src/app/${category}/sub/${safeName}.html`)
                }

                console.log(params)
            })

            container.appendChild(button)
        });
    } catch (error) {
        console.error(error)
    }
}

// Category change
querySelector('#categorySelect').addEventListener('change', (e) => {
    const category = e.target.value
    if (!category) return
    read(category)
})

// Search button
querySelector("#templateSearchButton").addEventListener("click", () => {
    const text = querySelector("#templateSearchInput").value.trim()
    const category = querySelector("#categorySelect").value
    if (!category) return
    read(category, text)
})

// Generate QR code page
querySelector("#generateTemplateButton").addEventListener("click", () => {
    if (!params.category || !params.name || !params.pointer) return

    const url = `http://127.0.0.1:5500/src/app/templateGenerator/sub/qrCodeTemplate.html?category=${encodeURIComponent(params.category)}&name=${encodeURIComponent(params.name)}&pointer=${params.pointer}`
    window.location.href = url;
})
