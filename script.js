fetch("tudoDeBom.json")
    .then(rep => {
        return rep.json()
    })
    .then(data => {
        // a ce niveau on devrait avoir dans la console les données renvoyé par l'API
        console.log(data)
        affichePlat(data.plats)

        
    });




//role: recupérer les plats dans le Json et les afficher dans mon DOM
//parametre: tableau des plats
//return: rien elle affiche

function affichePlat(tableauPlats){
    
    tableauPlats.forEach(plats => {

        document.querySelector("#card-container").innerHTML += `
        <div class= "card flex gap-32 align-center">
        <img class="w-30 radius" src="${plats.image}" alt="">

            <div class="w-50">
                <p class="mb-32 font-bungee">${plats.nom}</p>

                <p class="font-comfortaa">${plats.desc}</p>
            </div>
            </div>`


    });
}
