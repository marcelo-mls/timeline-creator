export function setLocalStorage(title, payload) {
  localStorage.setItem(title, JSON.stringify(payload));
}

export function getLocalStorage(title) {
  const result = localStorage.getItem(title);
  return result || [];
}
