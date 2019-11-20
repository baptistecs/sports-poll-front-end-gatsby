# Sports Poll

Dead simple poll system around some sports events which can be fetched from a JSON file, developed with Gatsby

## Table of Contents

- [Sports Poll](#Sports-Poll)
  - [Table of Contents](#Table-of-Contents)
  - [Quickstart prerequisites](#Quickstart-prerequisites)
    - [Install Gatsby client](#Install-Gatsby-client)
    - [Clone or download the repository from Github](#Clone-or-download-the-repository-from-Github)
    - [Go to the project root directory](#Go-to-the-project-root-directory)
  - [Quickstart for the development environment](#Quickstart-for-the-development-environment)
  - [Quickstart for the production environment](#Quickstart-for-the-production-environment)
    - [Create a production build](#Create-a-production-build)
    - [Serve the production build locally](#Serve-the-production-build-locally)
    - [💫 Deploy](#%F0%9F%92%AB-Deploy)
  - [TODO](#TODO)
  - [Gatsby projects](#Gatsby-projects)
    - [🧐 What's inside?](#%F0%9F%A7%90-Whats-inside)
    - [🎓 Learning Gatsby](#%F0%9F%8E%93-Learning-Gatsby)

## Quickstart prerequisites

### Install Gatsby client

`npm install -g gatsby-cli` More informations on the [Gatsby tutorial page](https://www.gatsbyjs.org/tutorial/part-zero/) and with the `gatsby --help` command.

### Clone or download the repository from Github

Check the "Clone or download" green button on the [repository page](https://github.com/baptistecs/sports-poll-front-end-gatsby/tree/master).

### Go to the project root directory

`cd sport-poll-front-end-gatsby`

## Quickstart for the development environment

Run `gatsby develop` and follow the instructions (open http://localhost:8000/)

## Quickstart for the production environment

### Create a production build

`gatsby build`

### Serve the production build locally

`gatsby serve`

### 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/baptistecs/sports-poll-front-end-gatsby)

## TODO

- [x] Make vote editable
- [x] Votes persistance in the local storage
- [x] Offline mode with service worker
- [ ] Add flags for the countries
- [ ] Add icon for the type sports
- [ ] Change icon in gatsby-config.js
- [ ] Custom 404 (with service worker)
- [ ] Improve accessibility

## Gatsby projects

### 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

### 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
