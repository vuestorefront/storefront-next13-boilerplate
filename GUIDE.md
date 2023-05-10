# Vue Storefront + Next.js Starter Guide

Welcome to the Vue Storefront Boilerplate for a [Next.js 13+](https://nextjs.org/) project! This guide will provide you with an overview of the project structure, tools, and best practices to help you get started quickly.

## Table of Contents

1. [Introduction](#introduction)
2. [Directory Structure](#directory-structure)
3. [Building the Project](#building-the-project)
4. [Web app](#web-app)
5. [Server app](#server-app)
6. [TypeScript and Tooling](#typescript-and-tooling)
7. [Additional Resources](#additional-resources)

## Introduction <a name="introduction"></a>

The Boilerplate Template is designed to provide a solid foundation for building Vue Storefront applications with a [Turborepo](https://turbo.build/repo) builder and [Next.js 13+](https://nextjs.org/) framework. It includes several tools and configurations to streamline development and enforce best practices.

This Turborepo includes the following apps:

### Apps

- `server`: [Vue Storefront Middleware](https://docs.vuestorefront.io/v2/architecture/server-middleware.html) server
- `web`: [Next.js 13](<(https://nextjs.org/)>) + Vue Storefront app

### Utilities

This Turborepo has some additional tools already setup for you:

- [ESLint](https://eslint.org/) & [Lint-Staged](https://github.com/okonet/lint-staged) for code linting
- [Jest](https://jestjs.io) test runner
- [Prettier](https://prettier.io) for code formatting
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Husky](https://typicode.github.io/husky/) for working with Git hooks efficiently

### Commands

Commands avaiable from the project root

| Command       | Description                                                            |
| ------------- | ---------------------------------------------------------------------- |
| prepare       | Setup Husky                                                            |
| build         | Build all apps and packages                                            |
| start         | Run your production apps                                               |
| dev           | Run apps in development mode                                           |
| lint          | Lint all your apps and packages                                        |
| clean         | Perform cleanup up and reinstall dependencies in all apps and packages |
| test          | Run tests in apps                                                      |
| test:watch    | Run tests in apps in watch mode                                        |
| test:coverage | Run tests in apps with coverage                                        |

## Directory Structure <a name="directory-structure"></a>

The project follows a recommended directory structure to organize code and resources efficiently. Here's an overview of the key directories:

Project

    .
    ├── .husky                  # Husky configuration
    ├── apps
    │   ├── server              # VSF Middleware
    │   └── web                 # NextJs app
    ├── .lintstagedrc.js        # Global Lint-Staged configuration
    ├── .prettierrc             # Global Preffier configuration
    ├── package.json            # Global Project dependencies
    ├── turbo.json              # Turborepo configuration
    └── ...                     # Global config files

Feel free to adapt the structure to your project's specific needs, but keeping the core directories intact will help maintain consistency.

## Building the Project <a name="building-the-project"></a>

To build the project, follow these steps:

1. Clone the repository:

```console
$ git clone https://github.com/vuestorefront/storefront-next13-boilerplate.git
```

2. Navigate to the project root:

```console
$ cd storefront-next13-boilerplate
```

3. Install dependencies:

```console
$ yarn install
```

4. Run the project in development mode:

```console
$ yarn dev
```

Project will be served at http://localhost:3000/

## Web app <a name="web-app"></a>

<!-- TODO links -->

Web app is a core of your application. It's a [Next.Js 13]() app with [Vue Storefront SDK]() library that helps you easy integrate with an E-Commerce Platform.

Web app directory structure is based on [Next.Js]() conventions with some additional directories.

    .
    ├── ...
    ├── components              # Project Components
    │   ├── Footer
    │   ├── ...
    │   └── ui                  # StorefrontUI block components
    ├── helpers                 # Helper utils
    ├── hooks                   # Custom hooks
    ├── layouts                 # Layouts
    ├── mocks                   # Static data
    ├── pages                   # Pages
    │   ├── _app.tsx            # Custom App component
    │   ├── _document.tsx       # Custom Document component
    │   ├── index.tsx           # Home page
    │   └── ...
    ├── public                  # Public assets
    ├── sdk                     # Vue Storefront SDK configuration
    ├── styles                  # Project CSS configuration
    ├── .eslint.js              # ESLint configuration
    ├── .lintstagedrc.js        # Lint-Staged configuration
    ├── jest.config.ts          # Jest configuration
    ├── next.config.js          # Next.Js configuration
    ├── package.json            # Project dependencies
    ├── tailwind.config.js      # TailwindCSS configuration
    ├── tsconfig.json           # TypeScript configuration
    └── ...

Next.Js pages are Server-Side-Rendered by default.

### Features:

#### Vue Storefront SDK
<!-- TODO ARE there any docs for this? -->

Vue Storefront SDK is a tool that help you integrating your application with a headless E-commcommerce backend using Vue Storefront easily.

#### StorefrontUI

[`StorefrontUI`](https://docs.storefrontui.io/v2/) is a lightweight, accessible, and customizable component library built for e-commerce and powered with [TailwindCSS](https://tailwindcss.com/).

Check out other [blocks components](https://docs.storefrontui.io/v2/react/blocks.html) and enhance full potential of StorefrontUI.

#### PWA

[`Progressive Web App`](https://web.dev/learn/pwa/) features are powered by the [next-pwa](https://github.com/shadowwalker/next-pwa), a zero Config PWA Plugin for Next.js.

#### i18n

Project ships with basic setup for localised content powered by an awesome [Next-i18next](https://next.i18next.com/) library.
Project translations are available in a `public/locales/[locale].json` files.

#### Testing
<!-- TODO -->

## Server app <a name="server-app"></a>

The Boilerplate Template is built using a JavaScript framework. Please refer to the framework's documentation for detailed usage instructions and available features.

## TypeScript and Tooling <a name="typescript-and-tooling"></a>

The project is built using TypeScript to provide static typing and improved developer productivity. Key tooling and configurations included in the template are as follows:

- TypeScript: The project utilizes TypeScript for type checking and compilation.

### Linting with ESLint

ESLint is used for code linting to ensure code quality and maintain consistency. The project includes an ESLint configuration file with recommended rules. To lint the project, run `yarn lint`.

### Pre-commit Rules

To enforce code quality and reduce errors, pre-commit rules have been set up. These rules include running ESLint and TypeScript checks before committing code.

## Additional Resources <a name="additional-resources"></a>

- [Next.js](https://nextjs.org/): Refer to the official documentation.
- [TypeScript Documentation]: Learn more about TypeScript and its features.
- [ESLint Documentation]: Explore ESLint's documentation for configuring rules and extending functionality.

Thank you for choosing the Boilerplate Template project! If you have any questions or need further assistance, please refer to the project's repository or reach out to the community for support.
