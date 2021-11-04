import React, {FC} from 'react';
import {DATA} from "../moc_data/fileTree";
import Tree from "../components/TreeFiles/Tree";
import {
  MainLayoutRow,
  MainLayoutLeftSide,
  MainLayoutWrapper,
  MainLayoutHeader, MainLayoutFooter
} from "./styles"

const MainLayout: FC = ({children}) => {
  return (
    <MainLayoutWrapper>
      <MainLayoutHeader/>
      <MainLayoutRow>
        <MainLayoutLeftSide>
          <Tree data={DATA}/>
        </MainLayoutLeftSide>
        <div>
          {children}
        </div>
      </MainLayoutRow>
      <MainLayoutFooter/>
    </MainLayoutWrapper>
  );
};

export default MainLayout;