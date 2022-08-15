module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['eslint-plugin-prettier'],
  parser: '@typescript-eslint/parser',
  env: { jest: true },
  settings: { react: { version: 'detect' } },
  rules: {
    'no-shadow': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-console': 'off',
    // 'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-plusplus': 'off',
    'no-undef': 'off',
    'no-undefined': 'off',
    'react/display-name': 'off',
    // jsx 单引号
    'jsx-quotes': [2, 'prefer-single'],
    'import/no-cycle': 'off', // TODO: remove
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-extraneous-dependencies': 'off',
    'import/no-useless-path-segments': 'off',
    // 关闭variable必须全部大写规则
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        modifiers: ['const'],
        format: null,
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    // 统一eslint prettier配置
    // 'prettier/prettier': ['warn', {}, { usePrettierrc: true }],

    // ------------
    // 我的特有配置
    // ------------
    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',
    'no-void': 'off',
    'multiline-ternary': 'off',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'prefer-promise-reject-errors': 'off',

    // allow debugger during development only
    'no-debugger': 'off',

    quotes: [2, 'single'],
    semi: 0,
    'arrow-body-style': [2, 'as-needed'],
    'max-len': [1, 300, 2],
    'newline-per-chained-call': 0,
    'no-continue': 0,
    'no-mixed-operators': [
      2,
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['&&', '||'],
        ],
        allowSamePrecedence: true,
      },
    ],
    'no-underscore-dangle': [0],
    'object-curly-spacing': 2,
    'prefer-arrow-callback': [
      0,
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'func-names': [0],
    'consistent-return': [0],
    'no-constant-condition': 0,
    'no-await-in-loop': 0,
    'object-curly-newline': [
      'error',
      {
        // "ObjectExpression": "never",
        ObjectExpression: { multiline: true, minProperties: 3 },
        ObjectPattern: { multiline: true },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
    'no-prototype-builtins': 0,
    'array-bracket-spacing': 'off',
    // "comma-dangle": ["error", {
    //   "arrays": "always",
    //   "objects": "never",
    //   "imports": "never",
    //   "exports": "never",
    //   "functions": "never"
    // }],
    'global-require': 'off',
    camelcase: 'off',
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-bitwise': 0,
    'no-unused-vars': 0,
    'vue/no-mutating-props': 0,
    'vue/no-unused-components': 0,
    'no-irregular-whitespace': 0,

    // 能不能使用 require
    '@typescript-eslint/no-var-requires': 'off',

    // 函数在调用前没有声明
    'no-use-before-define': 'off',

    // 字符串中不能出现 ${}
    'no-template-curly-in-string': 'off',

    // 一个文件中最多可以已定义多少个 class
    'max-classes-per-file': 'off',
    'prefer-destructuring': 'off',
    'no-multi-assign': 'off',
  },
};
