
async function getPokemon(){
    const resp= await axios
    axios
    .get("https://rickandmortyapi.com/api/character")
    .then((response)=>{
        console.log(response.data.results);
    })
    .catch((err)=>{
        console.log(err);
    });
    return resp;
}
const data = await getPokemon();
console.log("Esto es depues de la peticion");
