import icons from '../../img/icons.svg';

import View from './View.js';

class ReposView extends View {
  _parentElement = document.querySelector('.repos');
  _errorMessage = 'Nenhum resultado encontrado para este usuário';

  _generateMarkup() {
    return this._data.map(this._generateMarkupRepo).join('');
  }

  _generateMarkupRepo(result) {
    return `
    <li class="repo">
      <a class="repo__link" target="_blank" href="${result.url}">
        <div class="repo__data">
          <h4 class="repo__name">${result.name}</h4>
          <p class="repo__description">${result.description}</p>
        </div>
        <div class="repo__icon">
          <svg>
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </div>
      </a>
    </li>
    `;
  }
}

export default new ReposView();
