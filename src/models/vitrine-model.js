import { bancoDeCursos } from "../js/db.js"

export class Vitrine {
    static container = document.querySelector('.container-curso')

    static CreateCard({title, time, price, instrutor, image}){
        const card = document.createElement('div')
        card.classList.add('card')

        card.innerHTML =`
            <img src='${image}'/>
            <h2>${title}</h2>
            <p>${time} horas de puro conhecimento por apenas <span>R$ ${price},00</span></p>
            <h3>Responsavel: ${instrutor}</h3>
        `
        return card
    }

    static CreateVitrine(cursos){
        this.container.innerHTML = ""
        this.container.append(...cursos.map(curso => {
            return this.CreateCard(curso)
        }))
    }

    static AddCurso(e){
        e.preventDefault()
        const inputs = [...e.target]

        const curso = {}

        inputs.forEach(({name, value}) => {
            if(name){
                curso[name] = value
            }
        })

        bancoDeCursos.push(curso)
        Vitrine.CreateVitrine(bancoDeCursos)
    }
}