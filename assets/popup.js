const _$ = (v, p = document) => p.querySelector(v)
const _$$ = (v, p = document) => [...p.querySelectorAll(v)]

const popupBtns = _$$('.popup-btn.click-to-open')

let activePopupEl = null;

popupBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        if(e.target.innerText !== 'Move') return
        if(btn.classList.contains('active')){
            btn.classList.remove('active')
            activePopupEl = null
        }else{
            btn.classList.add('active')
            setTimeout(() => activePopupEl = btn, 100)
        }
    })
    const closeBtns = _$$('.popup-close-btn', btn)
    closeBtns.forEach(b => {
        b.addEventListener('click', () => {
            btn.classList.remove('active')
            activePopupEl = null
        })
    })
})

// window.addEventListener('click', e => {
//     // console.log(e.target === activePopupEl);
//     if(activePopupEl){
//         activePopupEl.classList.remove('active')
//         activePopupEl = null
//     }
//     console.log(e.path[0]);
// })