const handleResponse = () => {
  fetch('https:swapi.dev/api/people/1/')
      .then(response => response.json())
      .then(name => {
        fetch( "https://swapi.dev/api/vehicles/14/")
            .then(response => response.json())
            .then( res =>  {
                fetch('https://swapi.dev/api/starships/12/')
                    .then(response => response.json())
                    .then(erjan => alert(`hello ${name.name}, you are ${name.birth_year} years old , ${res.name} , ${erjan.name}`))
          })
      })
      .catch(error => console.log(error))
}

handleResponse()

