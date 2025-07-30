let instance;

class ConfigManager {
  constructor(settings = {}) {
    if (instance) {
      return instance; 
    }
    this.settings = settings;
    instance = this;
  }

  get(key) {
    return this.settings[key];
  }

  set(key, value) {
    this.settings[key] = value;
  }
}

// Export a frozen Singleton instance with default config
const configManager = Object.freeze(
  new ConfigManager({
    apiUrl: "https://api.example.com",
    featureX: true,
  })
);

export default configManager;
