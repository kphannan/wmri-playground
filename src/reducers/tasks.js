// let taskListReducer = function(tasks = [], action) {
const tasks = (state = [], action) => {
    switch (action.type) {

        case 'TASK_TOGGLE_ENABLED':
            // Find this action in the state, then update the isEnabled attribute
            return state.map((task) => {
                return task.id === action.payload.id
                    ? Object.assign({}, task, {isEnabled: !task.isEnabled})
                    : task
            })

        default:
            return state;
    }
};

export default tasks;
