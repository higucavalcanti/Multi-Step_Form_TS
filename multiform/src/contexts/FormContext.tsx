import { ReactNode, createContext, useContext, useReducer } from 'react';
import { ContextType } from '../types/ContextType';
import { State } from '../types/State';
import { Action } from '../types/Action';

type FormProviderProps = {
    children: ReactNode
}

const initialData: State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: '',
};

const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}
const FormReducer = (state: State, action: Action) => {
    switch(action.type) {
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload};
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

// Provider
export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer( FormReducer, initialData )
    const value = { state, dispatch }

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

// Context Hook
export const useForm = () => {
    const context = useContext(FormContext);
    if(context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    };
    return context;
}