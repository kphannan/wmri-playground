// function getId(todos) {
//   return todos.reduce((maxId, todo) => {
//     return Math.max(todo.id, maxId)
//   }, -1) + 1
// }


const defaultState = {
    id: "",
    scac:  "",
    number:  "",
    unitType:  "",
    comment:  "",
    model: {
        manufacturer: "",
    },
    decoder: {
        address:  "",
        family:  "",
        model:  "",
        comment:  "",
        filename:  "",
    },
};

export const motivePowerActions = {

    noop: (id) =>  ({
            type: 'NOOP',
    }),

    resetToDefaults: () => ({
        type: 'RESET_TO_DEFAULTS',
        payload: defaultState
    }),

    changeRoadName: (roadName, state ) => ({
        type: 'CHANGE_ROAD_NAME',
        payload: {
            roadName: roadName,
            id: `${roadName} ${state.number}`
        }
    }),

    changeRoadNumber: (roadNumber, state) => ({
        type: 'CHANGE_ROAD_NUMBER',
        payload: {
            number: roadNumber,
            id: `${state.scac} ${roadNumber}`
        }
    }),
    // viewTask: (id) => ({
    //     type: 'VIEW_TASK',
    //     id:   id
    // }),

    // toggleTaskEnabled: (id) => ({
    //     type: 'TASK_TOGGLE_ENABLED',
    //     error: true,
    //     payload: {
    //         id: id
    //     }
    // })

}

// export default taskActions

const motivePower = (state = defaultState, action) => {

  if ( action === undefined )
    return state;

  switch (action.type) {

//     case 'ADD_POWER':
//       // console.log( 'ADD_POWER' )
//       return [{
//           text: action.text,
//           completed: false,
//           id: getId(state)
//         }, ...state]

    case 'CHANGE_ROAD_NAME':
        return Object.assign({}, state, {scac: action.payload.roadName, id:  action.payload.id});

    case 'CHANGE_ROAD_NUMBER':
        return Object.assign({}, state, {number: action.payload.number, id:  action.payload.id});

    case 'RESET_TO_DEFAULTS':
      return Object.assign( {}, defaultState );


//       // return state.map((todo) => {
//       //     return todo.id === action.id ? 
//       //       Object.assign({}, todo, {completed: !todo.completed}) : todo
//       //   })

//     case 'DELETE_POWER':
//       // console.log( 'DELETE_POWER' )
//       return
//         state.filter((todo) => {
//           return todo.id !== action.id
//         })

    default: 
      return state;
  }
}

export default motivePower
