const YeomanGenerator = require('yeoman-generator');

module.exports = class extends YeomanGenerator{

  constructor(args, opts) {
    super(args, opts);
    this.option('babel');
    this.argument('componentName', { type: String, required: true });
  }

  configuring() {
    this.sourceRoot('yeoman/template/');
    this.destinationRoot()
    this.config.save();
  }

  writing() {
    const componentDir = `src/components/${this.options.componentName}/`;
    ['index.js', 'index.test.js', 'View.jsx', 'styles.scss'].forEach(fileName => 
      this.fs.copyTpl(
        this.templatePath(fileName),
        this.destinationPath(componentDir + fileName),
        { componentName: this.options.componentName }
      )
    );
  }
};
