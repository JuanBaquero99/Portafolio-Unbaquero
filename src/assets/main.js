const API = 'https://github-repos.p.rapidapi.com/search?user=JuanBaquero99'

const fetch = require('node-fetch');

const url = 'https://github-repos.p.rapidapi.com/search?user=JuanBaquero99';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '30417caa7fmsh97acc4550ac5433p16c3c8jsn27a5628b5737',
    'X-RapidAPI-Host': 'github-repos.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}