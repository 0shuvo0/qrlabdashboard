const $ = (v, p = document) => p.querySelector(v)
const $$ = (v, p = document) => [...p.querySelectorAll(v)]


const initInputWithSuggestions = (el) => {
    const input = $('input', el)
   
    const suggestionItems = $$('.suggestion-item', el)
    suggestionItems.forEach(suggestion => {
        suggestion.addEventListener('click', (e) => {
            e.preventDefault()
            input.value = suggestion.innerText
        })
    })
}
const inputWithSuggestions = $$('.input-with-suggestions')
inputWithSuggestions.forEach(el => initInputWithSuggestions(el))