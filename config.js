// Configuration utility for frontend
const AppConfig = (() => {
  let config = {
    baseUrl: 'http://localhost:3000',
    apiUrl: 'http://localhost:3000/api',
    environment: 'development'
  };

  return {
    async init() {
      try {
        const response = await fetch('/api/config');
        config = await response.json();
        console.log('✅ Configuration loaded:', config);
      } catch (error) {
        console.warn('⚠️ Using default configuration:', error.message);
      }
    },

    get(key) {
      return config[key];
    },

    getAll() {
      return { ...config };
    },

    getImageUrl(path) {
      return this.baseUrl + path;
    },

    getPdfUrl(path) {
      return this.baseUrl + path;
    }
  };
})();

// Initialize config on page load
document.addEventListener('DOMContentLoaded', () => {
  AppConfig.init();
});
