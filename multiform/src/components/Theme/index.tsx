import { Header } from '../Header';
import * as C from './styles';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode
}

export const Theme = ({children}: Props) => {
    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.SideBar>
                        ...
                    </C.SideBar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    );
}
