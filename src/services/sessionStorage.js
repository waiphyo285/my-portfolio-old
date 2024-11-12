class sessionStorageService {
  ss = window.sessionStorage;

  setItem(key, value) {
    value = JSON.stringify(value);
    this.ss.setItem(key, value);
    return true;
  }

  getItem(key) {
    const value = this.ss.getItem(key);
    try {
      return JSON.parse(value);
    } catch (e) {
      return null;
    }
  }

  removeItem(key) {
    this.ss.removeItem(key);
    return true;
  }
}

export default new sessionStorageService();
