const axios = require('axios');

// Nombre de usuario de GitHub
const username = "JuanBaquero99";

// URL del endpoint de la API para los repositorios públicos
const url = `https://api.github.com/users/${username}/repos?type=public`;

// Realizar la solicitud GET
axios.get(url)
  .then(response => {
    // Verificar el código de estado de la respuesta
    if (response.status === 200) {
      // Obtener los repositorios de la respuesta
      const repos = response.data;
      // Hacer algo con los repositorios obtenidos
      repos.forEach(repo => {
        console.log(repo.name);  // Imprimir el nombre del repositorio
      });
    } else {
      console.error(`Error: ${response.status}`);
    }
  })
  .catch(error => {
    console.error('Error al realizar la solicitud:', error);
  });
