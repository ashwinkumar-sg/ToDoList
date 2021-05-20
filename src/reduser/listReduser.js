const InitialState = [] 

const listReducer = (state = InitialState, action) => {
    switch(action.type){
    
        case 'LIST' : {
            return [...action.payload] 
            }

        default : { 
            return [...state]
        } 

    }
}
export default listReducer