
# Game of Three

![CI/CD](https://github.com/mehul9595/game-of-three-client/workflows/CI/CD%20game-of-three/badge.svg)

Game of three is a fun game played with multiplayer or computer. The game is currently hosted on Azure, you can try out the live demo [here.](https://game-of-three.azurewebsites.net) Site can be also accessed through it's [CDN here](https://game-of-three.azureedge.net).

This project is built with:

- [React + Bootstrap with Create-react-app](https://github.com/facebook/create-react-app)
- [Ant Design Components](https://ant.design/)
- [NodeJS Backend](https://github.com/mehul9595/game-of-three-server)
- [socket.io](https://socket.io/)

*Note: Checkout [feature branch](https://github.com/mehul9595/game-of-three-client/tree/redux) to see the implementation of Single Player game mode using React-Redux and Hooks way.*

## Description

When a player starts, they incept a random (whole) number and send it to the second player as an
approach of starting the game. The receiving player can then choose between adding one of {-1,0,1} in
order to get to a number that is divisible by 3. The resulting whole number is then sent back to the original
sender.
The same rules are applied until one player reaches the number 1 (after the division. See example
[here](https://invis.io/JHN2247E9MK).)

For each "move", a sufficient output should be generated (mandatory: the added, and the resulting
number).
Both players should be able to play automatically without user input. One of the players should optionally
be adjustable by a user.

## Available Scripts

In the project directory, you can run:

### `yarn install`

To install the packages and dependencies required by the project.

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
