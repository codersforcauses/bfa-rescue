# BFA Rescue

A web application / website aiming to upgrade the existing website of Best Friends Animal Rescue to make rescuing and re-homing dogs in need in Perth easier.

## Available Scripts

Please have `yarn` installed on your computer to run the project the intended way. Also make sure the line endings for the project are `lf` to reduce any possible bugs.

In the project directory, you can run:

### `yarn dev`

Runs the app's frontend and backend in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn client`

Runs the app's frontend only in development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `yarn server`

Runs the app's backend only in development mode.
Backend server runs on port 3000

<!-- ### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. -->

## Package management

Since we're using yarn workspaces, the packages should not be installed in the respective folders. Instead, to add/remove packages to either the `client` or `server`, use

### `yarn workspace <workspace-name> <operation> <package-name> [flag]`

- `workspace-name` - this should be either `client` or `server`, depending on which workspace to install it
- `operation` - this will be with `add` to install a dependency or `remove` to uninstall
- `package-name` - the name of the package-name(s)(space separated) to install (example: `bootstrap`, `vue express`, etc.)
- `flag` - optional argument of yarn flags like `-D/--dev` to install as devDependency or `-O/--optional` to install as optional dependency

## Learn More

To learn Vue v2, check out the [Vue documentation](https://vuejs.org/v2/guide/).

To learn Express, check out the [Express documentation](https://expressjs.com/)

To learn Mongoose (ORM for MongoDB), check out the [Mongoose Documentation](https://mongoosejs.com/docs/api.html)
