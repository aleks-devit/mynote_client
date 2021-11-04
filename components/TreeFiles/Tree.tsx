import React from 'react';
import {StyledTree} from "./styles";

const Tree: React.FC = ({children}) => {
    return (
        <StyledTree>
            {children}
        </StyledTree>
    );
};

export default Tree;