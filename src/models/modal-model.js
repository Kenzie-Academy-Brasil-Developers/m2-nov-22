export class Modal{
    static localModal = document.querySelector('body')

    static actionRemove(e){
        const modal = e.target.parentNode.parentNode
        Modal.localModal.removeChild(modal)
    }

    static createModal(childrem){
        const containerModal = document.createElement('section')
        containerModal.classList.add('containerModal')

        const modal = document.createElement('div')
        modal.classList.add('modal')

        const removeModal = document.createElement('button')
        removeModal.classList.add('removedModal')
        removeModal.innerText = "X"
        removeModal.addEventListener('click', Modal.actionRemove)

        modal.appendChild(removeModal)
        modal.appendChild(childrem)
        containerModal.appendChild(modal)
        Modal.localModal.appendChild(containerModal)
    }
}