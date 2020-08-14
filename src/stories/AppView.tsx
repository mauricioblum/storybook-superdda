import React from 'react';

const styles  = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: 420,
    overflow: 'hidden',
  }
}

const AppView: React.FC = ({children}) => {
return <div style={styles.container}><div style={styles.app}>{children}</div></div>; 
};

export default AppView;