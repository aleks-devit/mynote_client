import React from 'react';
import Tree from "../components/TreeFiles/Tree";
import {DATA} from "../moc_data/fileTree";

const TreeFiles = () => {
  return (
    <Tree data={DATA}/>
  );
};

export default TreeFiles;