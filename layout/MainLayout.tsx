import React, {FC} from 'react';
import {DATA} from "../moc_data/fileTree";
import Tree from "../components/TreeFiles/Tree";
import {
  MainLayoutRowComponent,
  MainLayoutLeftSideComponent,
  MainLayoutWrapperComponent,
  MainLayoutHeaderComponent, MainLayoutFooterComponent
} from "./styles"

const MainLayout: FC = ({children}) => {
  return (
    <MainLayoutWrapperComponent>
      <MainLayoutHeaderComponent/>
      <MainLayoutRowComponent>
        <MainLayoutLeftSideComponent>
          <Tree data={DATA}/>
        </MainLayoutLeftSideComponent>
        <div>
          {children}
        </div>
      </MainLayoutRowComponent>
      <MainLayoutFooterComponent/>
    </MainLayoutWrapperComponent>
  );
};

export default MainLayout;