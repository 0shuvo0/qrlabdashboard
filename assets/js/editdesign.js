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


const colorPickers = $$('.colour-picker-wrap')
colorPickers.forEach(createColorPicker)

function createColorPicker(colorPicker){
    const picker = $('.input.color', colorPicker)
    const previewText = $('.input.text', colorPicker)
    const previewColor = $('.color-preview', colorPicker)
    const reset = $('.reset', colorPicker)

    picker.addEventListener('input', () => {
        previewText.innerText = picker.value
        previewColor.style.setProperty('--background-color', picker.value)
    })
    
    reset.addEventListener('click', () => {
        previewText.innerText = '#000000'
        picker.value = '#000000'
        previewColor.style.setProperty('--background-color', '#000000')
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