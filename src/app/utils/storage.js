export function getStorage(name, local = false) {
  return local
    ? JSON.parse(localStorage.getItem(name))
    : JSON.parse(sessionStorage.getItem(name));
}
export function setStorage(name, item, local = false) {
  return local
    ? localStorage.setItem(name, JSON.stringify(item))
    : sessionStorage.setItem(name, JSON.stringify(item));
}
