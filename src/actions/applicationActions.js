


let applicationActions = {

    noopApplication: function(application) {
        console.log( 'NOOP Application: ', application )

        // fetch the task information.

        // return something for reducers to act on.
        return {
            type: 'NOOP',
        };
    },


    updateAppName: function(applicationName) {
        console.log( 'Application.Action: updateAppName')
        console.log( applicationName )

        return {
            type: 'APP_NAME_EDIT',
            error: false,
            payload: {
                applicationName: applicationName
            }
        }
    },

    findTaskList: function(applicationName) {
        console.log( 'Application.Action: updateAppName')
        console.log( applicationName )

        return {
            type: 'FIND_TASK_LIST',
            error: false,
            payload: {
                // payload should be the list of tasks
                applicationName: applicationName
            }
        }
    }

}

export default applicationActions
