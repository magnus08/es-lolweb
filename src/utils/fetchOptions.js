export const get = () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json; charset=UTF-8");
  return {
    method: 'GET',
    mode: 'cors',
    headers: headers,
    credentials: 'include',
  }
};

export const post = () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json; charset=UTF-8");
  return {
    method: 'POST',
    mode: 'cors',
    headers: headers,
    credentials: 'include',
    body: JSON.stringify({}),
  }
};

export const del = () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json; charset=UTF-8");
  return {
    method: 'DELETE',
    mode: 'cors',
    headers: headers,
    credentials: 'include',
  }
};
