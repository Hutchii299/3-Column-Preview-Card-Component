export default class View {

    render(data) {
        this._data = data;
        const markUp = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markUp);
    }

    _clear = function () {
        this._parentElement.innerHTML = '';
    }

    addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }
}