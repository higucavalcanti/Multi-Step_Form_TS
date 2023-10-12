import { createContext } from "vm";


const FormContext = createContext(undefined);

enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}
const FormReducer = (state, action) => {
    switch(action.type) {
        case FormActions.setCurrentStep:
            return {...state, curretStep: action.payload};
        case FormActions.setName:
            return {...state, name: action.payload};
        case FormActions.setLevel:
            return {...state, level: action.payload};
        case FormActions.setEmail:
            return {...state, email: action.payload};
        case FormActions.setGithub:
            return {...state, github: action.payload};
        default:
            return state;
    }
} 