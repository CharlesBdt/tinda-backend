# Tinda Back - Guide

## Summary

- [App information](#app-information)
- [Installation](#installation)
- [Local run](#local-run)
- [Deploy](#deploy)
- [Best practices](#best-practices)
- [Naming convention](#naming-convention)
  - [File naming](#files-naming)
  - [Variables and classes naming](#variables-and-classes-naming)

## App information

- App name : Tinda Backend App
- Description : Tinder clone w/ M.E.R.N Stack
- App repositories :
  - [Front-end](https://github.com/CharlesBdt/tinda-frontend)
  - [Back-end](https://github.com/CharlesBdt/tinda-backend)

## Installation

> Dev purpose

- Prerequisites :\
Install [commitizen](http://commitizen.github.io/cz-cli/) globally

```sh
npm install commitizen -g
```

Read more at [Best practices section](#best-practices)

> Run & Dev purpose

- Prerequisites :\
  Populate your `.env` file with secret values as below

```sh
PORT = 8001

DB_USER = ''
DB_PWD = ''
DB_NAME = ''
```

- Install dependencies :

```sh
yarn install
```

## Local run

DEV

```sh
yarn dev
```

PROD

```sh
yarn start
```

Then open [http://localhost:8001](http://localhost:8001) to view it in the browser.

## Deploy

The app will be deployed on Heroku.

## Formatting

To use formatting on VS Code please install these plugins : [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).\
Follow Prettier extension's instructions to setup "format on save" for ease of use.

## Best practices

- For commit and repository consistency, please use :

```sh
git cz # instead of 'git commit'
```

You'll be prompted to fill in any required fields and your commit messages will be formatted according to the standards defined by project maintainers.

- Respect the [git-flow process](https://danielkummer.github.io/git-flow-cheatsheet/index.fr_FR.html) as much as possible :

- Create a branch for each features - eg. `feature(user)/create-profil` or `fix(room): update room name`
- Commit with `giz cz`
- Submit PR to `develop` branch

## Naming convention

### Files naming

- Folders : kebab-case or spinal-case, eg : `my-components`
- Assets (Pictures, css files, logos, ...) : kebab-case or spinal-case, eg : `my-logo.svg`
- React components : PascalCase or UpperCamelCase, eg : `MyComponent.js`

### Variables and classes naming

- HTML : kebab-case or spinal-case - eg : `my-hmtl-component`
- CSS : kebab-case or spinal-case - eg : `my-css-class`
- JS functions and variables : camelCase - eg : `myFunction` or `myVariable`
- React components and JS classes : PascalCase or UpperCamelCase - eg : `MyComponent` or `MyClass`
