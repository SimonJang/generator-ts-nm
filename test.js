const path = require('path');
const test = require('ava');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const pify = require('pify');

let generator;

test.beforeEach(async () => {
	await pify(helpers.testDirectory)(path.join(__dirname, 'temp'));
	generator = helpers.createGenerator('ts-nm', [path.join(__dirname, './app')], null, {skipInstall: true});
});

test('should generate files', async t => {
	helpers.mockPrompt(generator, {
		functionName: 'test',
		functionDescription: 'test description',
		keywords: ['foo', 'bar', 'baz'],
		githubUsername: 'test',
	});

	await pify(generator.run.bind(generator))();

	assert.file([
		'.editorconfig',
		'.gitattributes',
		'.gitignore',
		'.travis.yml',
		'.prettierrc',
		'package.json',
		'tsconfig.json',
		'tslint.json',
		'source/index.ts',
		'source/test/test.ts',
		'readme.md'
	]);

	t.pass();
});
