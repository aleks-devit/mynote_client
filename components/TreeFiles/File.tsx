import React from 'react';
import {AiOutlineFile} from "react-icons/all";
import FILE_ICONS from "../../assets/file-icons";
import {StyledFile} from "./styles";

interface FileProps {
    name: string;
}

const File: React.FC<FileProps> = ({name}) => {
    // получаем расширение
    let ext = name.split('.')[1];

    const getKeyValue = <T extends object, U extends keyof T>(key: U) => (obj: T) =>
        obj[key];

    return (
        <StyledFile>
            {/* отображаем иконку в зависимости от расширени  */}
            {FILE_ICONS[ext]  || <AiOutlineFile />}
            <span>{name}</span>
        </StyledFile>
    );
};

export default File;