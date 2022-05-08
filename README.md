![Node.js Package](https://github.com/mugo-agency/stylelint-config/workflows/Node.js%20Package/badge.svg)
# stylelint-config

Mugo's shareable Stylelint config for use across projects.

## Installation 

Install [stylelint](https://stylelint.io/) and `@mugo-agency/stylelint-config`:

**With Yarn**
```
yarn add --dev stylelint @mugo-agency/stylelint-config
```

**With npm**
```
npm install stylelint @mugo-agency/stylelint-config --save-dev
```


## Usage
Mugo's stylelint rules come bundled in `@mugo-agency/stylelint-config`. To enable these rules, add a `stylelint` property in your `package.json`. See the [stylelint configuration docs](https://stylelint.io/user-guide/configuration/) for more details.
```
"stylelint": {
  "extends": ["@mugo-agency/stylelint-config"]
}
```

Now you can run stylelint by adding the following linting script to your `package.json`. See the [stylelint CLI docs](https://stylelint.io/user-guide/cli/) for more details.
```
"scripts": {
  "stylelint": "stylelint 'src/**/*.scss'"
}
```
Run it:

**With Yarn**
```
yarn run stylelint
```

**With npm**
```
npm run stylelint
```
