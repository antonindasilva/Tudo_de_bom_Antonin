fetch("tudoDeBom.json")
    .then(rep => {
        return rep.json()
    })
    .then(data => {
        // a ce niveau on devrait avoir dans la console les données renvoyé par l'API
        console.log(data)
        affichePlat(data.plats)
        afficheServices(data.services)
        afficheHero(data)
        afficheTemoignage(data.temoignages)
        affichePromesse(data.promessesClient)
        //CARROUSELLE

        var swiper = new Swiper(".mySwiper", {
            effect: "cards",
            grabCursor: true,
            cardsEffect: {
               perSlideRotate:0,
               perslideOffSet:100,
               slideShadow:false,
            },
            pagination: {
                el: ".swiper-pagination",
            },
            slidePerView:"auto",
            loop:true,
        });



        //afficheBtn(data)
    });

    AOS.init();


//FONCTION POUR MES PLATS

//role: recupérer les plats dans le Json et les afficher dans mon DOM
//parametre: tableau des plats
//return: rien elle affiche

function affichePlat(tableauPlats) {

    tableauPlats.forEach(plats => {

        document.querySelector("#card-container").innerHTML += `
        
       
                        
                    
         <div class= "card flex gap-32 align-center" data-aos="fade-up"
     data-aos-duration="1000">
            <img class="w-30 radius" src="${plats.image}" alt="">

            <div class="w-50">
                <p class="mb-32 font-bungee">${plats.nom}</p>

                <p class="font-comfortaa">${plats.desc}</p>
            </div>
        </div>

        `
    });
}


//FONCTION POUR MES SERVICES

//role: recuperer les services et les afficher
//prametre: tableau des services
//return: rien elle affiche 



function afficheServices(tableauServices) {

    tableauServices.forEach(services => {

        document.querySelector("#serviceContainer").innerHTML += `<div data-aos="fade-up"
     data-aos-duration="1000" class="card-service flex column align-center ">
                <img class="w-30 radius" src="${services.image}" alt="">

                <div class="w-40 text-center">
                    <h3 class="mt-16 font-bungee">${services.nom}</h3>

                    <p class="mt-16 font-comfortaa">${services.desc}</p>
                </div>
            </div>

       `


    });
}


//FONCTION POUR LES TEMOIGNAGES

//role: recuperer les temoignages et les afficher
//parametre: tableau temoignage
//return: rien elle affiche


function afficheTemoignage(tableauTemoignage) {

    tableauTemoignage.forEach(temoignages => {

        document.querySelector("#carContainer").innerHTML += `
           <div class="swiper-slide">     
        <div class="flex column card-avis font-comfortaa w-100">

            <p class="mb-16">"${temoignages.commentaire}"</p>

            <p class="mb-16">Type d'éxperience: ${temoignages.typeExperience}</p>

            <p class="mb-16">${afficheNote(temoignages.note)}</p>


            <div class="flex align-center gap-8">
                <p <i class="ph ph-user-square font-size-20"></i></p>
                <p class="">${temoignages.prenom}</p>
            </div>

        </div>
        </div>
                
       `
    });
}



//role: transformer la note en chaine de caractère etoiles
//parametre: la note
//return: chaine de caractère étoiles

function afficheNote(note) {


    //j'arrondi a l'entier supp
    let maNote = Math.ceil(note)

    //changer ma note en nombre d'étoiles sur 5
    let etoiles = "";

    for (let i = 1; i <= maNote; i++) {
        etoiles += "★"
    }

    for (let i = note + 1; i <= 5; i++) {
        etoiles += "✩"
    }

    return etoiles

}

function noteEtoile(note) {

    //j'arrondi a l'entier supp
    let maNote = Math.ceil(note)
    return "★".repeat(maNote) + "✩".repeat(5 - maNote)
}


//FONCTION POUR LES PROMESSES

//role: recuperer les promesses et les afficher
//parametre: tableau promesses
//return: rien elle affiche


function affichePromesse(tableauPromessesClient) {

    tableauPromessesClient.forEach(promessesClient => {


        document.querySelector("#promesseContainer").innerHTML += `
                    
            <div data-aos="fade-up"
     data-aos-duration="1000" class="font-comfortaa w-30 flex justify-center">
                <p class="font-size-40 mb-16">${promessesClient.icone}</p>
                <p>${promessesClient.phrase}</p>

            </div>

       `
    }
    )
}


//FONCTION HERO

//role: recuperer les infos de mon hero et les afficher
//parametre: clés json  
//return: rien elle affiche

function afficheHero(données) {

    document.querySelector("#h1Container").textContent = `
        ${données.nomCommercial}`

    document.querySelector("#pContainer").textContent = `
        ${données.texteAccroche}`

    document.querySelector("#btnContainer").textContent = `
        ${données.texteBouton}`


}




//Bouton qui ouvre une alerte plus de place !

let reserver = document.querySelector("#btnContainer")

reserver.addEventListener("click", function () {

    alert("NOUS SOMMES COMPLET JUSQU'EN 2027 COMME LES GRANDS BUFFETS DE NARBONE.. NOUS NOUS EXCUSONS POUR CELA..")
})



//Changement couleur header

//Je recup le header
let header = document.querySelector("header")
//Je recup le hero
let hero = document.querySelector(".bg-hero")
// j'ecoute le scroll:
window.addEventListener("scroll", function () {


    //si l'utilisateur a scrollé plus bas que le hero:
    if (window.scrollY > hero.clientHeight) {
        header.classList.remove("bg-vert")
        // je donne au header une classe qui change le bg
    } else {
        header.classList.add("bg-vert")

    }
})





