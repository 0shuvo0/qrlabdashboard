const $ = (v, p = document) => p.querySelector(v)
const $$ = (v, p = document) => [...p.querySelectorAll(v)]

const accordions = $$('.accordion-container.w-content')
accordions.forEach(createAccordion)

function createAccordion(accordion){
    const headers = $$('.accordion-header', accordion)
    headers.forEach(header => {
        $('.accordion-header-title', header).addEventListener('click', () => {
            header.classList.toggle('active')
        })
    })
}


// const colorPickers = $$('.colour-picker-wrap')
// colorPickers.forEach(createColorPicker)

// function createColorPicker(colorPicker){
//     const picker = $('.input.color', colorPicker)
//     const previewText = $('.input.text', colorPicker)
//     const previewColor = $('.color-preview', colorPicker)
//     const reset = $('.reset', colorPicker)

//     picker.addEventListener('input', () => {
//         previewText.innerText = picker.value
//         previewColor.style.setProperty('--background-color', picker.value)
//     })
    
//     reset.addEventListener('click', () => {
//         previewText.innerText = '#000000'
//         picker.value = '#000000'
//         previewColor.style.setProperty('--background-color', '#000000')
//     })
// }


const fileInputs = $$('.custom-file-input')
fileInputs.forEach(createFileInput)

function createFileInput(fileInput){
    const input = $('input', fileInput)
    const uploads = $('.file-input-uploads', fileInput)
    const fileName = $('.file-name-text', fileInput)

    function clearSelection(){
        $$('.w-embed', uploads).forEach(e => e.classList.remove('active'))
    }

    $$('.w-embed', uploads).forEach(e => {
        e.addEventListener('click', () => {
            clearSelection()
            e.classList.add('active')
        })
    })

    input.addEventListener('change', (e) => {
        const file = e.target.files[0]
        fileName.innerText = 'Choose File'

        if(!file) return

        //check if file is an image
        if(file.type.indexOf('image') === -1) return alert('Please upload an image')
        //check if file is less than 5kb
        if(file.size < 5000) return alert('Please upload an image larger than 5kb')
        //check if file is greater than 5mb
        if(file.size > 5000000) return alert('Please upload an image less than 5mb')

        fileName.innerText = file.name
        const url = URL.createObjectURL(file)
        clearSelection()
        const el = document.createElement('div')
        el.classList.add('w-embed')
        el.classList.add('active')
        el.addEventListener('click', () => {
            clearSelection()
            el.classList.add('active')
        })
        el.innerHTML = `<label>
        <img src="${url}" alt="">
        </label>`
        clearSelection()
        uploads.appendChild(el)
    })
}




const tabs = $$('.qr-editing-tabs')
tabs.forEach(createTab)

function createTab(tab){
    const navBtns = $$('.tabs-nav .tab-item', tab)
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if(btn.classList.contains('active')) return

            const activeTab =  $('.tabs-nav .tab-item.active', tab)
            activeTab.classList.remove('active')

            const activeTabContent = $(activeTab.dataset.content, tab)
            activeTabContent.classList.remove('active')

            btn.classList.add('active')
            const currentContent = $(btn.dataset.content, tab)
            currentContent && currentContent.classList.add('active')
        })
        
    })
}


// Options accordion content functionality
$$('.dot-style-select,.maker-border-style-select,.marker-dot-style-select, .frame-style-select').forEach(el => {
    const items = $$('.shape-forms-grid .w-embed', el)
    items.forEach(item => {
        item.addEventListener('click', () => {
            const activeEl = $('.shape-forms-grid .w-embed.active', el)
            if(activeEl){
                activeEl.classList.remove('active')
            }
            item.classList.add('active')
        })
    })
})