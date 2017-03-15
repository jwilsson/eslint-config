module.exports = {
  "extends": "./defaults.js",
  "env": {
    "browser": true,
    "jquery": true,
  },
  "rules": {
    "no-alert": "error",
    "no-implicit-globals": "error",
    "no-script-url": "error",
    "strict": ["error", "safe"],
  },
};
