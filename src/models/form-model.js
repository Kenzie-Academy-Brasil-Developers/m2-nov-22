import { bancoDeCursos } from "../js/db.js"

export class Formularios{
    static basicInputs = Object.keys(bancoDeCursos[0])
    static CreateInput(name){
        const input = document.createElement('input')
        input.setAttribute("type", 'text')
        input.setAttribute("name", name)
        input.setAttribute('placeholder', `Coloque o ${name}`)
        input.required = true
        input.classList.add('basicInput')
        return input
    }

    static CreateBaseForm(action){
        const form = document.createElement('form')
        form.addEventListener('submit', action)

        const button = document.createElement('button')
        button.classList.add('button')
        button.setAttribute('type', 'submit')
        button.innerText = "Enviar"
        
        this.basicInputs.forEach((input) =>  {
            form.appendChild(this.CreateInput(input))
        })
        
        form.appendChild(button)
        return form
    }

    static FilterForm(action){
        
    }
}


