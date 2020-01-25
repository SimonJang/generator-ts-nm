'use strict';
const Generator = require('yeoman-generator');
const _s = require('underscore.string');

module.exports = class extends Generator {
	init() {
		return this.prompt([
			{
				name: 'moduleName',
				message: 'What\'s the name of the module',
				default: this.appname,
				filter: x => _s.slugify(x)
			},
			{
				name: 'description',
				message: 'What\'s the description of the module',
				validate: desc => desc.length > 0 ? true : 'You have to provide a description'
			},
			{
				name: 'keywords',
				message: 'Provide a list of keywords - space or comma seperated -',
				filter: kw => kw.replace(/,? /g, ',').split(',')
			}
		])
			.then(props => {
				const template = {
					moduleName: props.moduleName,
					description: props.description,
					keywords: props.keywords,
					name: this.user.git.name(),
					email: this.user.git.email()
				};

				const mv = (from, to) => {
					this.fs.move(this.destinationPath(from), this.destinationPath(to));
				};

				this.fs.copyTpl(this.templatePath(), this.destinationPath(), template);

				mv('editorconfig', '.editorconfig');
				mv('gitattributes', '.gitattributes');
				mv('gitignore', '.gitignore');
				mv('travis.yml', '.travis.yml');
				mv('_package.json', 'package.json');
				mv('_tsconfig.json', 'tsconfig.json');
				mv('_tslint.json', 'tslint.json');
				mv('prettierrc', '.prettierrc');
			}
		);
	}

	git() {
		this.spawnCommandSync('git', ['init']);
	}

	install() {
		this.installDependencies({bower: false});
	}
};
