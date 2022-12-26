module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/vue3-essential'
	],
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'vue'
	],
	'ignorePatterns': [
		'**/*.html'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'warn'
			// "windows"
		],
		'quotes': [
			'warn',
			'single',
			{
				'avoidEscape': true
			}
		],
		'semi': [
			'error',
			'always'
		],
		'eqeqeq': [
			'error',
			'always'
		],
		'no-multiple-empty-lines': [
			'error',
			{
				'max': 1,
				'maxEOF': 0,
				'maxBOF': 0
			}
		],
		'newline-after-var': [
			'error',
			'always'
		],
		'newline-before-return': 'error',
		'lines-between-class-members': [
			'error',
			'always',
			{
				'exceptAfterSingleLine': true
			}
		],
		'object-curly-newline': ['error', { 'multiline': true, 'consistent': true }],
		'object-curly-spacing': ['error', 'always'],
		'comma-spacing': [
			'error',
			{
				'before': false,
				'after': true
			}
		],
		'comma-dangle': [
			'error',
			'never'
		],
		'no-trailing-spaces': 'error',
		'no-unused-vars': [
			'error', {
				'args': 'after-used',
				'ignoreRestSiblings': true,
				'varsIgnorePattern': '^_',
				'argsIgnorePattern': '^_'
			}
		],
		'key-spacing': [
			'error',
			{
				'mode': 'strict'
			}
		],
		'keyword-spacing': [
			'error',
			{
				'after': true, 'before': true
			}
		],
		'padding-line-between-statements': [
			'error',
			{
				'blankLine': 'always',
				'prev': '*',
				'next': [
					'if',
					'switch',
					'do',
					'while',
					'for',
					'debugger',
					'function'
				]
			},
			{
				'blankLine': 'always',
				'prev': [
					'if',
					'switch',
					'do',
					'while',
					'for',
					'debugger',
					'function'
				],
				'next': '*'
			},
			{
				'blankLine': 'always',
				'prev': [
					'import'
				],
				'next': '*'
			},
			{
				'blankLine': 'any',
				'prev': [
					'import'
				],
				'next': [
					'import'
				]
			}
		],
		'space-infix-ops': 'error'
	}
};
