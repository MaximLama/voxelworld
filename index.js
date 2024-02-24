import '@/styles/index.scss';
import Typed from 'typed.js';
import $clamp from 'clamp-js';

export default (function(){

    if (document.getElementById('main__title')) {
        const typed = new Typed('#main__title', {
            strings: ['Voxel World'],
            typeSpeed: 50,
            showCursor: false,
            loopCount: Infinity,
        })
    }

    const clampElements = document.querySelectorAll(".clamp");
    if (clampElements.length) {
        for (let clampElement of clampElements) {
            $clamp(clampElement, { clamp: 'auto' });
        }
    }

    const showTab = (elTabBtn) => {
        if (elTabBtn.classList.contains('active')) {
            return;
        }
        const targetId = elTabBtn.dataset.targetId;
        const elsTabPane = document.querySelectorAll(`.tab-pane[data-id="${targetId}"]`);
        if (elsTabPane.length) {
            const elsTabBtnActive = document.querySelectorAll('.tab.active');
            elsTabBtnActive.forEach((elTabBtnActive) => elTabBtnActive.classList.remove('active'));
            const elsTabPaneShow = document.querySelectorAll('.tab-pane.active');
            elsTabPaneShow.forEach((elTabPaneShow) => elTabPaneShow.classList.remove('active'));
            elTabBtn.classList.add('active');
            elsTabPane.forEach((elTabPane) => elTabPane.classList.add('active'));
        }
    }

    document.addEventListener('click', (e) => {
        if (e.target && !e.target.closest('.tab')) {
            return;
        }
        const elTabBtn = e.target.closest('.tab');
        showTab(elTabBtn);
    });
}());