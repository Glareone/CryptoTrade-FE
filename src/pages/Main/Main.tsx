import React from 'react';
import config from '../../common/config';
import './Main.scss';

const Main = (props: any) => {
  const handleClick = () => {
    props.history.push("/historical");
  }

  return (
    <div className="main">
      <p>MAIN PAGE. Too see users please use '/historical' page</p>
      <p>configurations</p>
      <p>Backend connection string: `{config.backendUrl}`</p>
      <p>ApplicationInsights Key: `{config.appInsightsKey}`</p>
      <button style={{ padding: '20px' }} onClick={handleClick}>Navigate to Historical Page</button>
    </div>
  );
};

export default Main;
