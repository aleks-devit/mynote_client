import React, {useState} from 'react';
import styles from '../../styles/Tree.module.scss'
import {AiOutlineFolder} from "react-icons/all";
import {StyledFolder} from "./styles";

interface FolderProps {
    name: string
}

const Folder: React.FC<FolderProps> = ({name, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <StyledFolder>
            <div className="folder--label">
                <AiOutlineFolder />
                <span>{name}</span>
            </div>
            {children}
        </StyledFolder>
    );
};

export default Folder;