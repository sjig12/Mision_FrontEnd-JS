/* Un fetch viene siendo una consulta al api practicamente */
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    /* Then viene siendo una "Promesa", lo que permite realizar tareas de forma asincrona (como multihilos, 
        que mientras termina de ejecutar una tarea el programa siguie trabajando en otras */
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("noEncontrado.jpg")
            
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
        }
    });
}

/*
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const getDataPokemon = (pokeName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    const nombre = document.getElementById('name-screen');
    fetch(url).then(
        (res) => res.json()
    )
    .then((data) => {
        console.log(data)
        let id = ('00'+ data.id).slice(-3);
        nombre.innerHTML=data.pokeName;
    });

}; */