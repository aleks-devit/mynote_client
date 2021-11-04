import React, {FC} from 'react';
import {DATAType} from "../../types/types_data_from_server/dataType";

interface NodeProps {
  item: DATAType
  hasChildren: boolean
  level: number
  onToggle: () => void
}

const Node: FC<NodeProps> = ({item, hasChildren, level, onToggle}) => {
  return (
    <div style={{paddingLeft: `${level * 16}px`}}>
      {item.label}

      {hasChildren && <button onClick={onToggle}>toggle</button> }
    </div>
  );
};

export default Node;