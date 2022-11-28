const _$ = (v, p = document) => p.querySelector(v)
const _$$ = (v, p = document) => [...p.querySelectorAll(v)]

const popupBtns = _$$('.popup-btn.click-to-open')

let activePopupEl = null;

popupBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        if(btn.classList.contains('active')){
            btn.classList.remove('active')
            activePopupEl = null
        }else{
            btn.classList.add('active')
            setTimeout(() => activePopupEl = btn, 100)
        }
    })
})

window.addEventListener('click', e => {
    // console.log(e.target === activePopupEl);
    if(activePopupEl){
        activePopupEl.classList.remove('active')
        activePopupEl = null
    }
})