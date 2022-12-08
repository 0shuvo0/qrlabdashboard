const $ = (v, p = document) => p.querySelector(v)
const $$ = (v, p = document) => [...p.querySelectorAll(v)]

const profileTabBtns = $$('.account-tab-btns .tab-btn')
const accountPageContent = $('#account-page-content')

const activeTab = $('.account-tab-btns .tab-btn.active')


const updateContent = templateId => {
    if(!templateId) return
    const template = $('#' + templateId)
    if(!template) return console.error('Template not found: ' + templateId)
    accountPageContent.innerHTML = template.innerHTML
}

if(activeTab){
    const templateId = activeTab.dataset.template
    updateContent(templateId)
}

const resetTabBtns = () => {
    profileTabBtns.forEach(btn => btn.classList.remove('active')) 
}
profileTabBtns.forEach(btn => {
    btn.addEventListener('click', () =>  {
        resetTabBtns()
        btn.classList.add('active')
        updateContent(btn.dataset.template)
        if(btn.innerText === 'Users') initUserModals()
    })
})

function initUserModals(){
    const addUserBtn = $('.add-new-user-btn')
    const addUserModal = $('.add-user-modal-wrapper')
    addUserBtn.addEventListener('click', () => addUserModal.classList.remove('hidden'))
    
    const editUserBtns  = $$('.edit-user-btn')
    const editUserModal = $('.edit-user-modal-wrapper')
    editUserBtns.forEach(btn => {
        btn.addEventListener('click', () => editUserModal.classList.remove('hidden'))
    })
    
    const deleteUserBtns  = $$('.delete-user-btn')
    const deleteUserModal = $('.delete-user-modal-wrapper')
    deleteUserBtns.forEach(btn => {
        btn.addEventListener('click', () => deleteUserModal.classList.remove('hidden'))
    })
}


$$('.modal-wrapper').forEach(modal => {
    const closeBtns = $$('.close-btn', modal)
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('hidden')
        })
    })
})