// Axios calls will need to be formatted like this:
// axios.get("your endpoint url",
//     {
//       "x-api-key": "your API Key
//     })

import axios from 'dotenv';
dotenv.config();

const BASE_URL = process.env.BASE_URL

const button = document.querySelector("#try-me");
const picDisplay = document.querySelector("#catpic");

const response = async function() {
  await axios.get(`${BASE_URL}`,

).catch(error => {
    console.log(error);
  })
}

button.addEventListener("click," async() => {

    try {
        const response = await axios.get(`${BASE_URL}`)
    } catch (error) {

    console.log(error);

    }

})

response();
