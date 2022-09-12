fetch("https://rickandmortyapi.com/api/character")
.then((response)=> response.json())
.then((json)=>{
    console.log(json.results);
    for (let p of json.results){
        console.log(p.name);
    }
})
.catch((error)=>console.error("se ha generado:"+error))
.finally(console.info("Ha finalizado la peticion"));