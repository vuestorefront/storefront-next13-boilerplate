# Development Guide

Welcome to the Vue Storefront Boilerplate for a [Next.js 13+](https://nextjs.org/) project! This guide will provide you with an overview of the project structure, tools, and best practices to help you get started quickly.

### Project Structure

Web application follows standard Next.js file/folder structure:

```shell

apps/
 └── web/
     ├── ...
     ├── components/              # Project Components
     │   ├── Footer/
     │   ├── ...
     │   └── ui                  # StorefrontUI block components
     ├── helpers/                 # Helper utils
     ├── hooks/                   # Custom hooks
     ├── layouts/                 # Layouts
     ├── mocks/                   # Static data
     ├── pages/                   # Pages
     │   ├── _app.tsx            # Custom App component
     │   ├── _document.tsx       # Custom Document component
     │   ├── index.tsx           # Home page
     │   └── ...
     ├── public/                  # Public assets
     ├── sdk/                     # Vue Storefront SDK configuration
     ├── styles/                  # Project CSS configuration
     ├── .eslint.js              # ESLint configuration
     ├── .lintstagedrc.js        # Lint-Staged configuration
     ├── jest.config.ts          # Jest configuration
     ├── next.config.js          # Next.Js configuration
     ├── package.json            # Project dependencies
     ├── tailwind.config.js      # TailwindCSS configuration
     ├── tsconfig.json           # TypeScript configuration
     └── ...

```

- `sdk` directory holds [Vue Storefront SDK]() initialization module
- `components/ui` directory keeps Storefront UI blocks components, like `ProductCard` or `Review`
- `helpers` is responsible for delivering utils / helpers functions
- `hooks` folder is responsible for delivering reusable hooks functions, e.g. data fetching and UI hooks
- `mocks` directory holds static data used across the application, e.g. application footer links

### Functions

Since React components are also functions, this project follows a few conventions to help with organizing your code:

- Each function is located in a dedicated module and exported from the `index.ts` file.
- Names should be short and descriptive.
- Named function export is preferred.
- TS types and tests ale located close to the function file.
- Expected file/folder structure:

```shell
<module-directory>/
 └── Function/
     ├─ index.tsx
     ├─ types.ts
     ├─ Function.ts
     └─ __tests__/
         └─ Function.spec.ts
```

### Hooks

React hooks are useful when stateful logic has to be reused across components - e.g. handling product data or controlling component state.
Project hooks are located in the `/apps/web/hooks/` directory and each have the following structure:

```shell
hooks/
 └── useProduct/
     ├─ index.tsx
     ├─ types.ts
     ├─ useProduct.ts
     └─ __tests__/
         └─ useProduct.spec.ts
```

Naming:

- each hook should be prefixed with `use` keyword (`useProduct`)
- hooks should follow `Camel case` pattern (`useProductReviews`)

### React Components

Components used in the boilerplate web app are located in the `components` directory and each component has the following file structure:

- Project components
  - Representational components that are designed to fulfill project requirements.
  - TS types and tests ale located close to the component
  - Expected file/folder structure:

```shell
components/
 └── Footer/
     ├─ index.tsx
     ├─ types.ts
     ├─ Footer.tsx
     └─ __tests__/
         └─ Footer.spec.tsx
```

- Storefront UI blocks
  - Reusable/generic types of components used throughout whole monorepo.
  - TypeScript types and tests are located close to the component
  - Expected file/folder structure:

```shell
components/
 └── ui/
     └── Display/
         ├─ index.tsx
         ├─ types.ts
         ├─ Display.tsx
         └─ __tests__/
            └─ Display.spec.tsx
```

Naming:

- React components should follow `Pascal case` pattern (`CategoryFilters`, `Heading`)
- The types for a component's props should be named `{Component}Props`. For example, `GalleryProps` or `HeadingProps`

#### Data fetching

Data fetching and state management is handled by [React-Query]() library.

### Localization

The boilerplate ships with a basic setup for i18n localization powered by the [Next-i18next]() library. Project locale translations are stored in `public/[locale]/[namespace].json` files. Translations are grouped by _features_, and imported only where required to minimize
Refer to the [Next-i18n documentation](https://next.i18next.com/) for the translating content with SSR.

### Testing

Project provide basic setup for testing JS code with `Jest` and [`testing-library`](https://testing-library.com/docs/react-testing-library/intro) for testing React components.
Testing configuration files:

- `jest.config.ts` - `Jest` config file.
- `jest.setup.ts` - mocks for third party (`next-i18next`) and global (`window`) objects.
- `jest.utils.tsx` - testing wrapper for `React-Query`, refer to the [official documentation](https://tanstack.com/query/v4/docs/react/guides/testing) for more info.

### Conventions enforced by automated tooling

To help you code with best practices in mind, this boilerplate comes with some automated tooling.

- All test descriptions follows naming convention `it('should ... ')`.
- Commit message enforces [Conventional Commits]() specification and use [`commitizen`]() library.
- Automatic code linting is managed by [`lint-staged`]() library and [Husky](https://typicode.github.io/husky/)
