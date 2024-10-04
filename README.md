# TravelBuddy

## Prerequisites

- [Node](https://nodejs.org/de/blog/announcements/v18-release-announce/)
  - It is recommended to use [nvm](https://github.com/nvm-sh/nvm) or something similar
- [Hasura](https://hasura.io/docs/2.0/index/)
- [Docker](https://www.docker.com/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- For the VSCode users, it is recommended to install the suggested plugins when you open the project the first time

## Getting Started

Install packages

- Clone this repo

- Install Hasura with the command: </br>
  `curl -L <https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh> | bash`

- `npm install`

## Firing it up :fire:

In a tiled terminal or similar run in separate terminals:

- `npm run infra` will run all services
- `npm run hasura`
- `npm start` run the ui

## Developer guidelines

- feature branches follow the naming: feature/{JIRA-Issue-ID}-{snake case short item description}
- bugfix branches follow the naming: bugfix/{JIRA-Issue-ID}-{snake case short item description}
- commit messages should follow the structure: "{verb in third person} ...." e.g. "introduces role profiles in hasura"
- commit messages should follow conventional commits format (https://www.conventionalcommits.org/en/v1.0.0/)
- examples for commit messages:
  - for a feature: `feat(TRCT-140): introduces new button in recipes step 2`
  - for a bugfix: `fix(TRCT-120): adds null check to expression in form`

#### Frontend Dev:

- `We should use React Native and Expo provided components first and then style with tailwindcss or search on external styling libraries. We prefer unstyled component to style them with tailwind and be awesome.`

##### Links for reference:

- https://docs.expo.dev/tutorial/introduction/
- https://docs.expo.dev/develop/project-structure/
- https://reactnative.dev/docs/components-and-apis

#### Naming conventions

- Expo apps:
  - files: snake-case
  - components names: PascalCase
  - folders and utility files: snake-case
- Node services:
  - snake-case for all files

### Before making a PR

Hey awesome!
Please check the following:

- [ ] Have you tried enough?

- [ ] Has your branch the correct naming convention (-)?

- [ ] Have you logged your work in JIRA and the ugly PM tool?

- [ ] Is your JIRA task in "In Progress" status?

- [ ] Have you added the boring translations?

- [ ] Have you checked UI responsiveness, at least for small screens (not mobile)?

- [ ] Have you exported a clean dump, in case you have changed type_metadata and views?

- [ ] Have you fixed warnings, ES lint errors and cleared console logs?

- [ ] Have you cleaned up unnecessary comments and debugger?

- [ ] Have you tested for side effects in other parts of the application?

- [ ] I mean seriously, have you tested at all?

---

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/nx-api/expo?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your remote caching setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/4mZZheup6o)

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve travel-buddy
```

To create a production bundle:

```sh
npx nx build travel-buddy
```

To see all available targets to run for a project, run:

```sh
npx nx show project travel-buddy
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/expo:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/nx-api/expo?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
