// let taskListReducer = function(tasks = [], action) {
const tasks = (state = [], action) => {
    switch (action.type) {

        case 'TASK_TOGGLE_ENABLED':
            // console.log( 'reducer: ' )
            // console.log( state )
            // console.log( action )

            // Find this action in the state, then update the isEnabled attribute
            return state.map((task) => {
                return task.id === action.payload.id
                    ? Object.assign({}, task, {isEnabled: !task.isEnabled})
                    : task
            })

        default:
            // console.log( 'TaskListReducer:: default')
            // console.log( action )
            return state;
    }
};

export default tasks;
// export default taskListReducer