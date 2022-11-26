const $ = (v, p = document) => p.querySelector(v)
const $$ = (v, p = document) => [...p.querySelectorAll(v)]


const qrCodeEditBtns = $$('.generated-link-item .badge-btn.edit .popup-btn-link:first-child')
const editInfoModal= $('.edit-info-modal-wrapper')
const deleteQRCodesModal= $('.delete-modal-wrapper')


$$('.close-btn', editInfoModal).forEach(btn => {
    btn.addEventListener('click', () => {
        editInfoModal.classList.add('hidden')
    })
})
$$('.close-btn', deleteQRCodesModal).forEach(btn => {
    btn.addEventListener('click', () => {
        deleteQRCodesModal.classList.add('hidden')
    })
})



qrCodeEditBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        editInfoModal.classList.remove('hidden')
    })
})

$('.info-item.delete').addEventListener('click', () => {
    deleteQRCodesModal.classList.remove('hidden')
})