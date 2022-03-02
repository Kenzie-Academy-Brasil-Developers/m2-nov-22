export class Modal{
    static localModal = document.querySelector('main')

    static removeModal(e){
        const modalParent = e.target.parentNode.parentNode
        const modalSelector = document.querySelector('.containerModal')

        Modal.localModal.removeChild(modalSelector)
    }

    static createModal(childrem){
        const containerModal = document.createElement('section')
        containerModal.classList.add('containerModal')
        
        const modal = document.createElement('div')
        modal.classList.add('modal')
        
        const removeModal = document.createElement('button')
        removeModal.classList.add('removedModal')
        removeModal.innerText = 'X'
        removeModal.addEventListener('click', Modal.removeModal)
        
        modal.appendChild(removeModal)
        modal.appendChild(childrem)
        containerModal.appendChild(modal)
        Modal.localModal.appendChild(containerModal)
   }
}