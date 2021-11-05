import React, {FC} from 'react';
import {DATAType} from "../../types/types_data_from_server/dataType";
import {NodeItem, NodeWrapper} from "./styles";
import {AiOutlineDown, AiOutlineFile, AiOutlineFolder, AiOutlineUp} from 'react-icons/ai';

interface NodeProps {
  item: DATAType
  level: number
  onToggle: false | (() => void)
  selected: boolean
}

const Node: FC<NodeProps> = ({item,  level, onToggle, selected}) => {
  return (
    onToggle ?
    <NodeWrapper level={level} onClick={onToggle}>
      <NodeItem>
        <AiOutlineFolder />
        {item.label}
        {selected ? <AiOutlineDown /> : <AiOutlineUp />}
      </NodeItem>
    </NodeWrapper>
      :
      <NodeWrapper level={level}>
        <NodeItem>
          <AiOutlineFile />
          {item.label}
        </NodeItem>
      </NodeWrapper>
  );
};

export default Node;