import View from './View.js';

class ResultView extends View {
  _parentElement = document.querySelector('.user');
  _errorMessage = 'Usuário não encontrado. Tente buscar outro usuário!';

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(event =>
      window.addEventListener(event, handler)
    );
  }

  _generateMarkup() {
    return `
      <figure class="user__fig">
        <img 
          src="${this._data.avatar}" 
          alt="${this._data.name}" 
          class="user__img" 
        />
      </figure>  
      
      <div class="user__info-wrapper">
        <h1 class="user__name">
          ${this._data.name}
        </h1>
        
        <div class="user__info">
          <span class="user__info-text">Usuário: </span>
          <span class="user__info-data user__info-data--login">
            ${this._data.id}
          </span>
        </div>
        <div class="user__info">
          <span class="user__info-text">Repositórios: </span>
          <span class="user__info-data user__info-data--repo">
            ${this._data.repos}
          </span>
        </div>
      </div>              
    `;
  }
}

export default new ResultView();
