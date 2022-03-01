import View from "./view.js";

class CardComponent extends View {
    _parentElement = document.querySelector('main');
    _data;

    _generateMarkup() {
        return this._data.map(function (card, index) {
            return `
                <article class="card card--${index}">
                    <img src="${card.icon}" class="card__icon" alt="card-icon"></img>
                    <h1 class="card__title">${card.title}</h1>
                    <p class="card__para">
                    ${card.content}
                    </p>
                    <a href="#" class="card__btn">Learn More</a>
                </article>
                `;
        }).join('');
    }
}

export default new CardComponent();