const $ = (v, p = document) => p.querySelector(v)
const $$ = (v, p = document) => [...p.querySelectorAll(v)]


const qrCodeEditInfoBtns = $$('.generated-link-item .badge-btn.edit .popup-btn-link:nth-child(1)')
const qrCodeDeleteBtns = $$('.generated-link-item .badge-btn.edit .popup-btn-link:nth-child(5), .delete-tag-btn')
const manageTagsBtns = $$('.manage-tags-btn')

const addNewFolderBtn = $('.add-new-folder-btn')
const formBtns = $$('.form-btns .form-btn:not(.add-new-folder-btn')

const editInfoModal= $('.edit-info-modal-wrapper')
const deleteQRCodesModal= $('.delete-modal-wrapper')
const addNewFolderModal= $('.add-new-folder-modal-wrapper')
const manageTagsModal = $('.manage-tags-modal-wrapper')

$$('.modal-wrapper').forEach(modal => {
    const closeBtns = $$('.close-btn', modal)
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('hidden')
        })
    })
})

qrCodeEditInfoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        editInfoModal.classList.remove('hidden')
    })
})
qrCodeDeleteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        deleteQRCodesModal.classList.remove('hidden')
    })
})
manageTagsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        manageTagsModal.classList.remove('hidden')
    })
})


addNewFolderBtn.addEventListener('click', () => {
    addNewFolderModal.classList.remove('hidden')
})

$('.info-item.delete').addEventListener('click', () => {
    deleteQRCodesModal.classList.remove('hidden')
})


const resetSelectedFolder = folderName => {
    formBtns.forEach(btn => btn.classList.remove('active'))
    $$('.folder-list .folder-list-item').forEach(item => {
        item.classList.remove('active')
        if(($('.title', item)).innerText === folderName){
            item.classList.add('active')
        }
    })
}

formBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const folderName = $('span', btn).innerText
        resetSelectedFolder(folderName)
        btn.classList.add('active')
        $('.selected-folder-name').innerText = folderName
    })
})


$('.select-all-qr-codes-btn').addEventListener('click', () => {
    $('.when-no-selections').classList.add('hidden')
    $('.when-selections').classList.remove('hidden')
    $$('.generated-link-item').forEach(i => i.classList.add('active'))
})