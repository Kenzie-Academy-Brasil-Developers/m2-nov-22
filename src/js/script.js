import { Formularios } from "../models/form-model.js";
import { Modal } from "../models/modal-model.js";
import { Vitrine } from "../models/vitrine-model.js";
import {bancoDeCursos} from "./db.js";

const addCurso = document.querySelectorAll('.sidebar button')

Vitrine.CreateVitrine(bancoDeCursos)

addCurso[0].addEventListener('click', () => {
    Modal.createModal(Formularios.CreateBaseForm(Vitrine.AddCurso))
})
addCurso[1].addEventListener('click', () => Modal.createModal(Formularios.CreateBaseForm()))
