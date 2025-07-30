let instance;

class CacheManager {
  constructor() {
    if (instance) return instance;
    this.cache = new Map();
    instance = this;
  }

  set(key, value) {
    this.cache.set(key, value);
  }

  get(key) {
    return this.cache.get(key);
  }

  has(key) {
    return this.cache.has(key);
  }
}

const cache = Object.freeze(new CacheManager());
export default cache;
