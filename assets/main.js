const $ = (v, p = document) => p.querySelector(v)
const $$ = (v, p = document) => [...p.querySelectorAll(v)]


const qrCodeEditInfoBtns = $$('.generated-link-item .badge-btn.edit .popup-btn-link:first-child')
const qrCodeEditDesignBtns = $$('.generated-link-item .badge-btn.edit .popup-btn-link:nth-child(2)')
const qrCodeDeleteDesignBtns = $$('.generated-link-item .badge-btn.edit .popup-btn-link:nth-child(3)')
const addNewFolderBtn = $('.add-new-folder-btn')
const tryDynamicFreeBtns = $$('.try-dynamic-free-btn')
const formBtns = $$('.form-btns .form-btn:not(.add-new-folder-btn')

const editInfoModal= $('.edit-info-modal-wrapper')
const editDesignModal= $('.edit-design-modal-wrapper')
const deleteQRCodesModal= $('.delete-modal-wrapper')
const addNewFolderModal= $('.add-new-folder-modal-wrapper')
const tryDynamicSuccessModal = $('.try-dynamic-success-modal-wrapper')


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
$$('.close-btn', addNewFolderModal).forEach(btn => {
    btn.addEventListener('click', () => {
        addNewFolderModal.classList.add('hidden')
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
tryDynamicFreeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tryDynamicSuccessModal.classList.remove('hidden')
    })
})
qrCodeDeleteDesignBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        deleteQRCodesModal.classList.remove('hidden')
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