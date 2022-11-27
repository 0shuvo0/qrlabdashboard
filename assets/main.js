const $ = (v, p = document) => p.querySelector(v)
const $$ = (v, p = document) => [...p.querySelectorAll(v)]


const qrCodeEditInfoBtns = $$('.generated-link-item .badge-btn.edit .popup-btn-link:first-child')
const qrCodeEditDesignBtns = $$('.generated-link-item .badge-btn.edit .popup-btn-link:nth-child(2)')
const qrCodeDeleteDesignBtns = $$('.generated-link-item .badge-btn.edit .popup-btn-link:nth-child(3)')
const editInfoModal= $('.edit-info-modal-wrapper')
const editDesignModal= $('.edit-design-modal-wrapper')
const deleteQRCodesModal= $('.delete-modal-wrapper')


$$('.close-btn', editInfoModal).forEach(btn => {
    btn.addEventListener('click', () => {
        editInfoModal.classList.add('hidden')
    })
})
$$('.close-btn', editDesignModal).forEach(btn => {
    btn.addEventListener('click', () => {
        editDesignModal.classList.add('hidden')
    })
})
$$('.close-btn', deleteQRCodesModal).forEach(btn => {
    btn.addEventListener('click', () => {
        deleteQRCodesModal.classList.add('hidden')
    })
})



qrCodeEditInfoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        editInfoModal.classList.remove('hidden')
    })
})
qrCodeEditDesignBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        editDesignModal.classList.remove('hidden')
    })
})
qrCodeDeleteDesignBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        deleteQRCodesModal.classList.remove('hidden')
    })
})

$('.info-item.delete').addEventListener('click', () => {
    deleteQRCodesModal.classList.remove('hidden')
})