class ImageText extends HTMLElement {
    constructor() {
        super();
        this.querySelector('[data-toggle_button]').addEventListener('click', this.toggleButton);
    }

    toggleButton(event) {
        let current_el = event.target;
        let parent_el = current_el.closest(".task1_content");
        let current_text = parent_el.querySelector('.task1_text[area-hidden=false]');
        let next_text = current_text.nextElementSibling;

    
        current_text.setAttribute('area-hidden', 'true');
        current_text.classList.add('hidden');

        current_el.style.visibility = 'hidden';

        next_text.setAttribute('area-hidden', 'false');
        next_text.classList.add('active');
    }
}

customElements.define('image-text', ImageText);