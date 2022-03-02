import { Formularios } from "../models/form-model.js";
import { Modal } from "../models/modal-model.js";
import { Vitrine } from "../models/vitrine-model.js";
import {bancoDeCursos} from "./db.js";

const buttons = document.querySelectorAll('.sidebar button')

Vitrine.CreateVitrine(bancoDeCursos)

buttons[0].addEventListener('click', () => Modal.createModal(
    Formularios.createForm(Vitrine.addCurso)
    ))


const imagemTest = document.createElement('img')
imagemTest.setAttribute('src', 'https://symbols.getvecta.com/stencil_92/73_python-icon.3d49e95599.svg')
imagemTest.classList.add('imgTest')
    

buttons[2].addEventListener('click', () => Modal.createModal(imagemTest))


/*
const modal = document.querySelector('.containerModal')

const removeModal = document.querySelector('.containerModal .modal .removedModal')

const showModal = () => {
    modal.classList.toggle('hidden')
}

buttons[0].addEventListener('click', showModal)
removeModal.addEventListener('click', showModal)
*/