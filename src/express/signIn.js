import { API_BASE_URL, ACCESS_TOKEN } from './constants';

const request = (options) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append('Authorization', `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`);
  }

  const defaults = { headers };
  const optionsHeader = Object.assign({}, defaults, options);

  return fetch(optionsHeader.url, options)
    .then(response => response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    }));
};

export function login(loginRequest) {
  return request({
    url: `${API_BASE_URL}/auth/signin`,
    method: 'POST',
    body: JSON.stringify(loginRequest),
  });
}

export function signup(signupRequest) {
  return request({
    url: `${API_BASE_URL}/auth/signup`,
    method: 'POST',
    body: JSON.stringify(signupRequest),
  });
}

export function getLookup() {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });
  const options = {
    url: `${API_BASE_URL}/lookup`,
    method: 'GET',
  };
  const defaults = { headers };
  const optionsHeader = Object.assign({}, defaults, options);

  return fetch(optionsHeader.url, options)
    .then(response => response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    }));
}
