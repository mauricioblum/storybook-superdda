import React, { useState, useCallback } from 'react';

import { Container, TabContainer, TabButton, TabText } from './styles';

export interface Tab {
  /** Tab order in numbers */
  order: number;
  /** Title of the tab */
  title: string;
  /** Tab unique identifier */
  identifier?: string;
}

export interface TabsProps {
  /** Array of tabs */
  tabs: Tab[];
  /** Callback when tab is clicked */
  onClickTab?(tab: Tab): void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, onClickTab }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClickTab = useCallback(
    (tab: Tab) => {
      setActiveTab(tab.order);
      onClickTab && onClickTab(tab);
    },
    [onClickTab],
  );

  return (
    <Container>
      <TabContainer>
        {tabs.map((tab) => (
          <TabButton
            key={tab.identifier || tab.order}
            active={tab.order === activeTab}
            onPress={() => handleClickTab(tab)}
          >
            <TabText active={tab.order === activeTab}>{tab.title}</TabText>
          </TabButton>
        ))}
      </TabContainer>
    </Container>
  );
};
