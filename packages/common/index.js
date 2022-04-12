module.exports = {
  env: {
    browser: true,
    node: true,
    es2022: true
  },
  globals: {
    window: 'readonly',
    document: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['eslint:recommended', '@efficient/eslint-config-style'],
  settings: {},
  ignorePatterns: [
    '*.min.*',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vscode'
  ],
  rules: {
    'no-unused-vars': 'warn'
  }
}
