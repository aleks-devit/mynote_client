import React, {FC, useState} from 'react';
import Node from './Node';
import {DATAType} from "../../types/types_data_from_server/dataType";

interface BranchProps {
  item: DATAType
  level: number
}

const Branch: FC<BranchProps> = ({item, level}) => {
  const [selected, setSelected] = useState( false)

  const hasChildren = !!item.children && item.children.length !== 0

  const renderBranches = () => {
    if(hasChildren) {
      const newLevel = level + 1

      return item.children &&  item.children.map((child: DATAType) => {
        return <Branch key={child.id} item={child} level={newLevel}/>
      })
    }

    return null
  }

  const toggleSelected = () => {
    setSelected((prev: boolean) => !prev)
  }

  return (
    <>
      <Node
      item={item}
      hasChildren={hasChildren}
      level={level}
      onToggle={toggleSelected}
      />

      {selected && renderBranches()}
    </>
  );
};

export default Branch;