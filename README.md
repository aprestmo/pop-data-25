# Norwegian Election Polling Data

A web application that fetches and displays Norwegian parliamentary election polling data from the [DN Group API](https://pop.dngroup.io/stortingsvalg-snitt).

## Features

- **Real-time data**: Fetches the latest polling data from the official API
- **Beautiful UI**: Modern, responsive design with party-specific colors
- **Historical view**: Shows the last 24 months of polling data in a sortable table
- **Party information**: Displays both party abbreviations and full Norwegian names
- **Mobile responsive**: Optimized for both desktop and mobile devices

## Political Parties Included

- **Ap** - Arbeiderpartiet (Labour Party)
- **SV** - Sosialistisk Venstreparti (Socialist Left Party)
- **R** - Rødt (Red Party)
- **Sp** - Senterpartiet (Centre Party)
- **V** - Venstre (Liberal Party)
- **KrF** - Kristelig Folkeparti (Christian Democratic Party)
- **H** - Høyre (Conservative Party)
- **Frp** - Fremskrittspartiet (Progress Party)
- **A** - Andre (Others)
- **MDG** - Miljøpartiet De Grønne (Green Party)

## Technology Stack

- **Astro** - Static site generator
- **TypeScript** - Type safety
- **CSS** - Custom styling with CSS Grid and Flexbox
- **Norwegian localization** - Proper date formatting and language support

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:4321`

## Data Source

The application fetches data from the DN Group's polling API endpoint:
`https://pop.dngroup.io/stortingsvalg-snitt`

The API returns monthly polling averages for Norwegian political parties, including:
- Party polling percentages
- Month and year data
- Historical trends

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## License

This project is open source and available under the MIT License.

```sh
yarn create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn install`             | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:4321`      |
| `yarn build`           | Build your production site to `./dist/`          |
| `yarn preview`         | Preview your build locally, before deploying     |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
