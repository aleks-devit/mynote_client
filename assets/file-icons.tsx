import {DiJavascript1, DiCss3Full, DiHtml5, DiReact} from 'react-icons/di';

interface IObjectKeys {
    [key: string]: JSX.Element
}

interface IFileIcons extends IObjectKeys {
    js: JSX.Element
    css: JSX.Element
    html: JSX.Element
    jsx: JSX.Element
}

const FILE_ICONS: IFileIcons = {
    js: <DiJavascript1/>,
    css: <DiCss3Full/>,
    html: <DiHtml5/>,
    jsx: <DiReact/>,
};
export default FILE_ICONS;