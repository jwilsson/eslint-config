module.exports = {
  "extends": "./defaults.js",
  "env": {
    "mocha": true,
    "node": true,
  },
  "rules": {
    "callback-return": "error",
    "global-require": "error",
    "handle-callback-err": "error",
    "no-buffer-constructor": "error",
    "no-new-require": "error",
    "no-path-concat": "error",
    "no-process-exit": "error",
    "no-underscore-dangle": ["error", {
        "allow": ["__dirname", "__filename"],
    }],
    "strict": ["error", "global"],
  },
};
