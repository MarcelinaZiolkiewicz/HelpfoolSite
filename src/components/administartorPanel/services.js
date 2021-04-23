import {v4 as uuidv4} from "uuid";

export const sendData = item => {
    console.log("Wysyłam...");
    console.log(item);

    const requestOption = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
    };

    fetch('http://localhost:5000/addTool', requestOption)
        .then(res => res.json())
        .then(data => {
            console.log("Odpowiedź serwera: ");
            console.log(data);
        })

}

export const defaultObject = {
    itemName: "",
    link: "",
    logo: "",
    paid: true,
    descriptionPL: "",
    descriptionENG: "",
    id: uuidv4(),
    clicksInTotal: 0,
    clicksPerWeek: 0,
    likes: 0,
    tags: "",
}

export const defaultCategory = {
    typeENG: "",
    typePL: "",
    tools: [
        defaultObject
    ]
}

export const testOptions = [
    { value: 'design', label: 'Design', valuePL: 'projektowanie'},
    { value: 'fonts', label: 'Fonts', valuePL: 'czcionki'},
    { value: 'animations', label: 'Animations', valuePL: 'animacje'}
]