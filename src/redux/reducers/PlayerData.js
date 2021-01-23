import Helper from "../../utils/helper";
import {
  PLAYER_ACTION,
  NUMBER_TO_DIVIDE_BY_THREE,
  BOT_ACTION,
  TURN_COUNTER,
  INITIALIZE_GAME_PLAY
} from "../actionTypes";

const initialState = {
  turnCount: 0,
  turnArray: [
    {
      id: 0,
      player: Helper.playerTypes.bot,
      value: Helper.getGameRandomNumber(),
      action: undefined,
      valueExpression: "",
    },
  ],
  requiredNumberToBeDividedByThree: undefined,
  winner: undefined,
};

const getValueForNextTurn = (lastValue, requiredNumberToBeDividedByThree) => {
  let expression = lastValue + requiredNumberToBeDividedByThree;

  let calculatedValue = parseInt(expression, 10) / 3;

  let stringExpression = `[( ${requiredNumberToBeDividedByThree} + ${lastValue} ) / 3] = ${calculatedValue}`;

  return {
    value: calculatedValue,
    valueExpresionStr: stringExpression,
  };
};

const findNumberToDivideByThree = (turnValue) => {
  if (turnValue % 3 === 0) {
    return 0;
  } else if ((turnValue + 1) % 3 === 0) {
    return 1;
  } else if ((turnValue - 1) % 3 === 0) {
    return -1;
  }
};

// define action handlers for Player Data
function PlayerData(state = initialState, action) { // defining initial state if user is going to visit directly through URL
  switch (action.type) {
    case INITIALIZE_GAME_PLAY: { // initializes the game play, when the player is redirected from routing
      state = {
        turnCount: 0,
        turnArray: [
          {
            id: 0,
            player: Helper.playerTypes.bot,
            value: Helper.getGameRandomNumber(),
            action: undefined,
            valueExpression: "",
          },
        ],
        requiredNumberToBeDividedByThree: undefined,
        winner: undefined,
      };
      return state;
    }
    case TURN_COUNTER: {
      return {
        ...state,
        turnCount: state.turnCount + 1,
      };
    }
    case PLAYER_ACTION: {
      let lastTurn = state.turnArray[state.turnCount - 1];
      let newTurnValue = getValueForNextTurn(
        lastTurn.value,
        state.requiredNumberToBeDividedByThree
      );

      let nextTurn = {
        id: state.turnCount,
        player: Helper.playerTypes.player,
        value: newTurnValue.value,
        action: state.requiredNumberToBeDividedByThree,
        valueExpression: newTurnValue.valueExpresionStr,
      };

      return {
        ...state,
        turnArray: [...state.turnArray, nextTurn],
        winner: nextTurn.value === 1,
      };
    }
    case BOT_ACTION: {
      // plays next turn automatically and increases counter
      let botTurnCounter = state.turnCount + 1;
      let lastTurn = state.turnArray[botTurnCounter - 1];
      let numberToBeAdded = findNumberToDivideByThree(lastTurn.value);
      let newTurnValue = getValueForNextTurn(lastTurn.value, numberToBeAdded);

      if (lastTurn.value === 1) { // skip bot's turn if player is the winner
        return state;
      }

      let nextTurn = {
        id: botTurnCounter,
        player: Helper.playerTypes.bot,
        value: newTurnValue.value,
        action: numberToBeAdded,
        valueExpression: newTurnValue.valueExpresionStr,
      };

      return {
        ...state,
        turnCount: botTurnCounter,
        turnArray: [...state.turnArray, nextTurn],
        requiredNumberToBeDividedByThree: numberToBeAdded,
        winner: nextTurn.value === 1,
      };
    }
    case NUMBER_TO_DIVIDE_BY_THREE: {
      let turnValue = state.turnArray[state.turnCount - 1].value;
      let numberRequired = findNumberToDivideByThree(turnValue);

      return { ...state, requiredNumberToBeDividedByThree: numberRequired };
    }
    default:
      return state;
  }
}

export default PlayerData;
