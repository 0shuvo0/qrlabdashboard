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
    })
})