module.exports = {
  "extends": "./defaults.js",
  "plugins": [
    "node",
  ],
  "env": {
    "mocha": true,
    "node": true,
  },
  "rules": {
    "callback-return": "error",
    "global-require": "error",
    "handle-callback-err": "error",
    "no-new-require": "error",
    "no-path-concat": "error",
    "no-process-exit": "error",
    "no-underscore-dangle": ["error", {
        "allow": ["__dirname", "__filename"],
    }],
    "strict": ["error", "global"],

    "node/no-deprecated-api": "error",
  },
};
