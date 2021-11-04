import React, {FC} from 'react';
import Branch from "./Branch";
import {DATAType} from "../../assets/constans";

interface TreeProps {
  data: DATAType[]
}

const Tree: FC<TreeProps> = ({data}) => {
  return (
    <div>
      {data.map((item: DATAType) => <Branch key={item.id} item={item} level={0}/>)}
    </div>
  );
};

export default Tree;