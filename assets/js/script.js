const play = (()=>{
    return {
        musica: () => {

            return `<iframe width="400" height="610" src= "${musica1.getUrl()}?start=${musica1.getInicio()}"  title="YouTube video player" frameborder="0" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            //return `<iframe width="1084" height="610" src= "${musica1.getUrl()}?controls=0"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

        },
        pelicula: () => {
            return `<iframe width="400 height="610" src= "${pelicula1.getUrl()}?start=${pelicula1.getInicio()}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

            //return `<iframe width="1940" height="826" src="https://www.youtube.com/embed/5PSNL1qE6VY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        },
        serie: () => {

            return `<iframe width="400" height="610" src="${serie1.getUrl()}?start=${serie1.getInicio()}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        },
    }
})()

let musica = () => {
    let resultado = document.getElementById('musica')
    resultado.innerHTML = play.musica()
}


let pelicula = () => {
    let resultado = document.getElementById('peliculas')
    resultado.innerHTML = play.pelicula()
}
let serie = () => {
    let resultado = document.getElementById('series')
    resultado.innerHTML = play.serie()
}

headingOne.addEventListener('click', musica)
headingTwo.addEventListener('click', pelicula)
headingThree.addEventListener('click', serie)



class Multimedia {
    constructor(url) {
        let _url = url // closure(let en vez de this), atributo privado
        this.getUrl = () => _url// funcion this.getNombre libre getUrl (=> es un return)
        this.setUrl = (nueva_url) => _url = nueva_url
        //this.setInicio = (nuevo_num) => _num = nuevo_num
    }
    setInicio(){// metodo q recibe y agrega un tiempo de inicio a la URL de la etiqueta iframe
        return "Este método es para realizar un cambio en la URL del video"
    }
}

class Reproductor extends Multimedia {
    constructor(url, id, num) {
        super(url) 
            let _id = id
            //this.setUrl = (nueva_url) => _url = nueva_url
            let _num = num
            this.getInicio = () => _num
            this.setInicio = (nuevo_num) => _num = nuevo_num    
            
            this.getId = ()=> _id
    }
    setUrl(url) {
        this._url = url
    }
    setId(id) {
        this._id = id
    }    
    playMultimedia(){// metodo
        return play(url,id)       
    }
    setAtribute(runTime) {
        this._runTime = runTime
    }
    setInicio(num){
        this_num = num   
        
        return "Este método es para realizar un cambio en la URL del video"     
    }
}



// instanciado
let musica1 = new Reproductor("https://player.vimeo.com/video/573608848?h=dc4c8e8dc2", "musica")
//<iframe width="640" height="360" src="https://www.youtube.com/embed/_dK2tDK9grQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<iframe title="vimeo-player" src="https://player.vimeo.com/video/573608848?h=dc4c8e8dc2" width="640" height="480" frameborder="0" allowfullscreen></iframe>
console.log(musica1.getUrl());//1 al buscar un metodo get de url

//musica1.setInicio(7)


let pelicula1 = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", "pelicula")
console.log(pelicula1.getUrl())
pelicula1.setInicio(30)
// volver a ejecutar 

//pelicula1.setUrl("https://www.youtube.com/embed/4Rsi-fcGHwA"+"?start="+num)

let serie1 = new Reproductor("https://www.youtube.com/embed/GfO-3Oir-qM", "serie")
console.log(serie1.getUrl())

// if( screen.width <= 480 ) {
//     alert('amcho')
// }
