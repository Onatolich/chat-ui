const storage = global.localStorage;

export default {
  /**
   * Returns parsed value by key
   * if there is no such key in storage - returns undefined instead of null (storage API fix)
   */
  get(key) {
    if (!Object.prototype.hasOwnProperty.call(storage, key)) {
      return undefined;
    }

    return JSON.parse(storage.getItem(key));
  },

  /**
   * Sets value to storage key
   * If passed value is undefined - removes key from storage (storage API fix)
   */
  set(key, value) {
    if (value === undefined) {
      this.remove(key);
      return;
    }

    storage.setItem(key, JSON.stringify(value));
  },

  /**
   * Removes key from storage
   */
  remove(key) {
    storage.removeItem(key);
  },

  /**
   * Removes all existed keys from storage
   */
  clear() {
    Object.keys(storage).forEach(this.removeItem);
  },
};
