import { async } from 'regenerator-runtime';
import { BASE_URL } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  result: {},
  repos: {
    list: [],
  },
};

export const loadResult = async function (id) {
  try {
    const data = await getJSON(`${BASE_URL}${id}`);

    state.result = {
      id: data.login,
      avatar: data.avatar_url,
      name: data.name,
      repos: data.public_repos,
    };
  } catch (err) {
    throw err;
  }
};

export const loadRepos = async function (endpoint) {
  try {
    const data = await getJSON(`${BASE_URL}${endpoint}`);

    state.repos.list = data.map(repo => {
      return {
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
      };
    });
  } catch (err) {
    throw err;
  }
};
