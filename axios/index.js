//axios-fetch
//-----axios------

const axios = require('axios');

async function main() {
    
    const response = await axios({
        url:"https://sum-server.100xdevs.com",
        method: "POST",
        headers: {
            Authorization: "Bearer 123",
        },
        data: {
            username: "shilpi"
        }
    },
);
console.log(response.data);
}
main();

//-----fetch-----

//promisified
// function main(){
//     fetch("https://sum-server.100xdevs.com/todos")
//     .then(async (response)=>{
//         const json = await response.json();
//         console.log(json.todos.length);
//     })
// }

//async-await
async function main() {
    const response = await fetch("https://sum-server.100xdevs.com/todos",{
        method: "PUT",
        body:{
            username: "shilpi",
            password:123
        },
        header:{
            "authorization":"Bearer 123"
        }
    });
    const json = await response.json();
    console.log(json.todos.length);
    
}

main();