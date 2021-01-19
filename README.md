
# Game of Three

![CI/CD](https://github.com/mehul9595/game-of-three-client/workflows/CI/CD%20game-of-three/badge.svg)

Game of three is a fun game played with multiplayer or computer. The game is currently hosted on Azure, you can try out the live demo [here.](https://game-of-three.azurewebsites.net)


This project is built with:

- [React + Bootstrap with Create-react-app](https://github.com/facebook/create-react-app)
- [Ant Design Components](https://ant.design/)
- [NodeJS Backend](https://github.com/mehul9595/game-of-three-server)
- [socket.io](https://socket.io/)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

Github Actions has been setup to build and deploy the app on to Azure Web App Service.

Github Actions builds the application continuously on every push and after sucessfully completing it is deployed to Azure. Workflow actions and history for [Github Actions](https://github.com/mehul9595/game-of-three-client/actions) here.
