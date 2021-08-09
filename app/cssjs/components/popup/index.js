const btns = document.querySelectorAll('.popup-trigger');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const body = document.querySelector('body')

btns.forEach((el) => {
    el.addEventListener('click', (e) => {

        let path = e.currentTarget.getAttribute('data-path');
        const popupModal = document.querySelector(`[data-target="${path}"]`)

        modals.forEach((el) => {
            el.classList.remove('modal--visible');
            body.style.overflowY = 'hidden'
            if (document.documentElement.scrollHeight != document.documentElement.offsetHeight &&
                document.documentElement.clientWidth >= 1260) body.style.paddingRight = '17px'
        });

        popupModal.querySelector('.popup-modal__close').addEventListener('click', () => {
            body.style.overflowY = 'visible'
            body.style.paddingRight = '0'
            modalOverlay.classList.remove('modal-overlay--visible');
            modals.forEach(el => el.classList.remove('modal--visible'));

        })
        popupModal.classList.add('modal--visible');
        modalOverlay.classList.add('modal-overlay--visible');
    });
});

modalOverlay.addEventListener('click', (e) => {

    if (e.target == modalOverlay) {
        body.style.overflowY = 'visible'
        body.style.paddingRight = '0'
        modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach( el => el.classList.remove('modal--visible'));
    }
});
