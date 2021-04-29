import {v4 as uuidv4} from "uuid";
import axios from "axios";
import FormData from 'form-data';

let response;
let error;

export const sendData = item => {

    console.log("Wysyłam obiekt...");
    console.log(item);

    axios.post('http://localhost:5000/addTool', item)
        .then(res => {
            response = res;
            console.log(response);
        })
        .catch(err => {
                error = err;
                console.log("Error: " + error);
            }
        )

}

export const sendImage = img => {
    console.log("Wysyłam zdjęcie...");
    console.log(img);

    let data = new FormData();
    data.append('myImage', img)

    axios.post('http://localhost:8080/upload', data, {
        headers: {
            'content-type': 'multipart/form-data'
        }})
        .then(res => {
            response = res;
            console.log(response);
        });
}

export const defaultObject = {
    name: "",
    link: "",
    img: null,
    price: true,
    descriptionPL: "",
    descriptionENG: "",
    id: uuidv4(),
    clicksInTotal: 0,
    clicksPerWeek: 0,
    likes: 0,
    tags: [],
}

export const defaultCategory = {
    typeENG: "",
    typePL: "",
    id: "",
    tools: [
        defaultObject
    ]
}
