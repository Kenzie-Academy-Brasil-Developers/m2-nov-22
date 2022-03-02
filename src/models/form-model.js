import { bancoDeCursos } from "../js/db.js"

export class Formularios{
    static basicInputsNames = Object.keys(bancoDeCursos[0])
    static createInput(name){
        const input = document.createElement('input')
        input.setAttribute("type", 'text')
        input.setAttribute("name", name)
        input.setAttribute('placeholder', `Preencha o ${name}`)
        input.classList.add('basicInput')
        input.required = true
        return input
    }

    static createForm(action){
        const form = document.createElement('form')
        form.addEventListener('submit', action)

        const button = document.createElement('button')
        button.classList.add('button')
        button.setAttribute('type', 'submit')
        button.innerText = 'Enviar'

        this.basicInputsNames.forEach((inputName) => {
            form.appendChild(Formularios.createInput(inputName))
        })

        form.appendChild(button)
        return form
    }
}


