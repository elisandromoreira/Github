import * as model from './model.js';
import resultView from './views/resultView.js';
import searchView from './views/searchView.js';
import reposView from './views/reposView.js';
import buttonsView from './views/buttonsView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const controlResult = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    resultView.renderSpinner();
    // 1) Loading result
    await model.loadResult(id);

    // 2) Rendering result
    resultView.render(model.state.result);
    buttonsView.renderButtons();
  } catch (err) {
    resultView.renderError();
  }
};

const controlSearch = function () {
  // Get search query
  const query = searchView.getQuery();
  if (!query) return;
  window.location.hash = `#${query}`;
};

const controlButtonsResults = async function (query) {
  try {
    reposView.renderSpinner();

    const id = window.location.hash.slice(1);

    // Get the endpoint
    const endpoint = `${id}/${query}`;

    // Loading Repos
    await model.loadRepos(endpoint);

    // Rendering Repos
    reposView.render(model.state.repos.list);
  } catch (err) {}
};

const init = function () {
  resultView.addHandlerRender(controlResult);
  searchView.addHandlerSearch(controlSearch);
  buttonsView.addHandlerClick(controlButtonsResults);
};

init();
