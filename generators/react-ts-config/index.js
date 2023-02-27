const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    this.spawnCommandSync("yarn", [
      "add",
      "-D",
      "eslint-plugin-react@latest",
      "eslint-config-standard-with-typescript@latest",
      "@typescript-eslint/eslint-plugin@^5.0.0",
      "eslint@^8.0.1",
      "eslint-plugin-import@^2.25.2",
      "eslint-plugin-n@^15.0.0",
      "eslint-plugin-promise@^6.0.0",
      "prettier",
      "eslint-config-prettier",
    ]);
    this.log("✅ ESLint and Prettier installed!");
  }

  eslint() {
    this.fs.copy(
      this.templatePath(".eslintrc.cjs"),
      this.destinationPath(".eslintrc.cjs")
    );
  }

  eslintIgnore() {
    this.fs.copy(
      this.templatePath(".eslintignore"),
      this.destinationPath(".eslintignore")
    );
  }

  prettier() {
    this.fs.copy(
      this.templatePath(".prettierrc"),
      this.destinationPath(".prettierrc")
    );
  }

  prettierIgnore() {
    this.fs.copy(
      this.templatePath(".prettierignore"),
      this.destinationPath(".prettierignore")
    );
  }

  editorConfig() {
    this.fs.copy(
      this.templatePath(".editorconfig"),
      this.destinationPath(".editorconfig")
    );
  }
};
