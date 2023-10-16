import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { Theme } from '../../components/Theme';
import { FormActions, useForm } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

export const FormStep2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
    });
  }, []);
  
  const handleNextStep = () => {
    if(state.name !== '') {
        navigate('/page3');
    } else {
        alert("Preencha os dados");
    }
  };

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>Vamos começar com seu nome!</h1>
                <p>Preencha o campo abaixo com seu nome completo</p>

                <hr />

                <SelectOption 
                    title="Sou iniciante"
                    description="Comecei a programar a menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0 }
                />

                <SelectOption 
                    title="Sou programador"
                    description="Já programo a 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1 }
                />

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
};