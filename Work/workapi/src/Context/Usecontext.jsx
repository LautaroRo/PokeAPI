import React, { createContext, useState } from 'react'
import corazon from "./../Assets/corazon.png"
import espada from "./../Assets/espada.png"
import proteger from "./../Assets/proteger.png"
import bomba from "./../Assets/bomba.png"
import blindaje from "./../Assets/blindaje.png"
import speed from "./../Assets/Speed.png"
export const Use = createContext()

const Usecontext = ({children}) => {
    const [page, setPage] = useState(false)
    const [obtener, setObtener] = useState([])
    const [habilidades, setHabilidades] = useState([])
    const [Stats, setStats] = useState([])
    const [botones, setBotones] = useState(false)
    const [Moves, setMoves] = useState([])
    const [estado, setEstado] = useState([])
    const [SeccionCaract, setSeccionCaract] = useState(true)
    const [SeccionMove, setSeccionMove] = useState(false)
    const [SeccionStats, setSeccionStats] = useState(false)
    const [SeccionHabilidades, setSeccionHabilidades] = useState(false)
    const [animation, setAnimation] = useState(false)
    let search = document.getElementById("search-list")
    const cambiarPage = () =>{
        setPage(true)
    }

    const AllPokemons = async()=>{
        let url = "https://pokeapi.co/api/v2/pokemon/?offset=1&limit=1280";
        const response = await fetch(url);
        const data = await response.json();

        
        const pokemonsAlmacenados = []

        for(let i = 0; i < data.results.length; i++){

            const urlFotos = data.results[i].url

            let url2 = urlFotos
            const response2 =  await fetch(url2);
            const data2 =  await response2.json();

            const foto = data2.sprites.other.dream_world.front_default
            const nombre = data2.name
            const id = data2.id

            if (foto !== null) {
                let informacion = {
                    fotos: foto,
                    nombre: nombre,
                    id: id,
                };
                pokemonsAlmacenados.push(informacion);
            }
            

        }

        setObtener(pokemonsAlmacenados)
    }


    const buscarpokemon = async(name) => {
    

        //Buscar al pokemon mediante su nombre
        let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        setBotones(false)
        // Buscar Especie
        const especie = []
        let especieContact = []
        
        for(let i = 0; data.types.length > i; i++){
        
            const tipo =data.types[i].type.name
            if( i > 0 ){
                especieContact.push(" - ")
            }
        
            especieContact.push(tipo)
        
        }
        
        especie.push(especieContact)
        
        especie.push(".")
        
        
        let info = {
            img: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            id: data.id,
            weight: data.weight,
            height: data.height,
            especie: especie
        }
        
        setEstado(info);
        
        
        
        
        //MOvimientos
        const movimientos = []
        
        for(let i = 0; i < 10; i++ ){
            let moves = {
                move: data.moves[i].move.name
            }
            movimientos.push(moves)
        }
        
        setMoves(movimientos)
        
        //Stats
        const stat = []
        
        for(let i = 0; data.stats.length > i; i++ ){
            
            const nombreStats = data.stats[i].stat.name
            const valorStat = data.stats[i].base_stat
        
            let img
        
            if( 0 === i){
                img = corazon
            }
            else if( 1 === i){
                img = espada
            }
            else if (2 === i){
                img = proteger
            }else if (3 === i){
                img= bomba
            }else if( 4 === i){
                img = blindaje
            }else if (5 === i){
                img = speed
            }
            let info = {
                statN : nombreStats,
                valorS : valorStat,
                img:img
            }
            stat.push(info)
        
            img = []
        }
        
        setStats(stat)
        
        
        //Habilidades
        
        const habilidades = []
        for(let i = 0; data.abilities.length > i; i++){
            const URL = await fetch(data.abilities[i].ability.url)
            const dataUrl = await URL.json()
        
            const name = dataUrl.name
        
            let info = {
                name: name
            }
            habilidades.push(info)
        }
        setHabilidades(habilidades)
        
        }



        const subir = (e) =>{
            e.preventDefault()
            setMoves([])
            
            let valorBusqueda = e.target.value;
    
            
    
            if(valorBusqueda.length > 2){
                const busqueda = obtener.filter(element => {
                    return element.nombre?.toLowerCase().includes(valorBusqueda)
                })
                buscarpokemon(valorBusqueda.toLowerCase())
                shwoSearChList(busqueda)
                if(busqueda.length > 2){
                    setBotones(true)
                }else{
                    setBotones(false)
                }
    
            }else{
                shwoSearChList([])
                setEstado([])
                setBotones(false)
            }
    
        }
        const shwoSearChList = (data1) => {
    
            if(data1 !== undefined && search){
                search.innerHTML = ""    
                data1.forEach((data)=>{
                    
                    const div = document.createElement("div")
                    div.classList.add("search")
                    div.innerHTML =`
                    <img data-id="${data.id}" src="${data.fotos}" alt="${data.id}"/>
                    <p id="p" data-nombre="${data.nombre}">${data.nombre}</P>
                    `
                    search.append(div)
                })
            }else if(data1 === undefined){
                console.log("no Hay nada")
            }
        };

        const buscar = (e) =>{
            let searchNombre = e.target.dataset.nombre
            const input = document.querySelector(".input")
            if(searchNombre === undefined){
                console.log(false)
            }
            else if(searchNombre !== undefined){
                input.value = searchNombre
                buscarpokemon(searchNombre)
                search.innerHTML= ""
            }else if(input.value === null){
                search.innerHTML= ""
            }
            console.log(input.value.length)
        }
        
        const scrollMas = (e) =>{
            e.preventDefault()
            
            try{
            search.scrollTop += search.offsetHeight
            }
            catch{
            console.log("error")
            }
        }
        
        
        const scrollMenos = (e) =>{
            e.preventDefault()
            
            try{
            search.scrollTop -= search.offsetHeight
            }
            catch{
            console.log("error")
            }
        }
    

        const seccionC = (e) =>{
            setSeccionCaract(true)
            setSeccionHabilidades(false)
            setSeccionMove(false)
            setSeccionStats(false)
    
            document.querySelector(".activo").classList?.remove("activo")
            e.target.classList.add("activo")
        }
        
    
        const seccionM = (e) =>{
            setSeccionMove(true)
            setSeccionCaract(false)
            setSeccionHabilidades(false)
            setSeccionStats(false)
    
    
            document.querySelector(".activo").classList?.remove("activo")
            e.target.classList.add("activo")
        }
        
        const seccionH = (e) =>{
            setSeccionHabilidades(true)
            setSeccionMove(false)
            setSeccionCaract(false)
            setSeccionStats(false)
            document.querySelector(".activo").classList?.remove("activo")
            e.target.classList.add("activo")
        
        }
    
    
        const seccionS = (e) =>{
            setSeccionStats(true)
            setSeccionHabilidades(false)
            setSeccionMove(false)
            setSeccionCaract(false)
    
            document.querySelector(".activo").classList?.remove("activo")
            e.target.classList.add("activo")
        }
    
        const cambiar = () =>{
            setAnimation(true)
        }
    return (
        <Use.Provider value={{cambiarPage, page, setPage, AllPokemons, obtener, habilidades, Stats, botones, corazon, espada, proteger, bomba, blindaje, speed, subir, Moves, estado, buscarpokemon, scrollMas, scrollMenos , buscar, seccionM, seccionC, seccionS, seccionH, SeccionCaract, SeccionMove,SeccionStats,SeccionHabilidades, cambiar, animation, setAnimation }}>
            {children}
        </Use.Provider>
    )
}

export default Usecontext