const API_URL = 'https://jsonplaceholder.typicode.com/users'

async function fetchUserData () {
    
   return new Promise((resolve, reject) => {
           const data =  fetch(API_URL)
           .then((response) => response.json())
           .then((results) => resolve(results))
    })    
}

fetchUserData().then(data => {

    const name = data.map((elem, index) => {
        return {
            'nombre': elem.name,
            'email': elem.email
        }
    })
    console.log(name)
})

