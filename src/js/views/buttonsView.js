import View from './View.js';

class ButtonsView extends View {
  _parentElement = document.querySelector('.navigation');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.navigation__btn');
      if (!btn) return;

      const query = btn.dataset.query;
      handler(query);
    });
  }

  renderButtons() {
    const markup = `
      <button data-query="repos" class="btn navigation__btn">
        <span>Repositórios</span>
      </button>
      <button data-query="starred" class="btn navigation__btn">
        <span>Favoritos</span>
      </button>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new ButtonsView();
