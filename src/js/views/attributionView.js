import View from "./view.js";

class AttributionComponent extends View {
    _parentElement = document.querySelector('footer');
    _data;

    addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }

    _generateMarkup() {
        return `
            <div class="attribution">
                Challenge by
                <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
                >Frontend Mentor</a
                >. Coded by <a href="#">Rhys Hutchinson</a>.
            </div>
            `;
    }
}
export default new AttributionComponent();