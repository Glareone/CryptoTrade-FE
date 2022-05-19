import React, { useEffect, useContext } from 'react';
import errorActions from '../../context/reducers/error/error-actions';
import historicalActions from '../../context/reducers/user/historical-actions';
import AppContext from '../../context/store';
import config from '../../common/config';
import { IHistoricalData } from '../../common/types/historical';
import { IResponseTemplate } from '../../common/types/response-template';

const Historical = () => {
  const [
    {
      historical: { historicalData },
      error: { errors }
    },
    dispatch
  ] = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      fetch(`${config.backendUrl}/api/historicalData/?aggregationInterval=0`)
        .then((response) => {
          debugger;
          return response.json()
        })
        .then((responseTemplate: IResponseTemplate<IHistoricalData>) => {
          debugger;
          dispatch({ type: historicalActions.SET_HISTORICAL_DATA , payload: responseTemplate.Content });
        })
        .catch((error) => {
          debugger;
          dispatch({ type: errorActions.SET_ERROR, payload: error });
        });
    }, 2000);
  }, [dispatch]);

  if (errors) {
    return (
      <p>
        Something went wrong: <span>{errors}</span>
      </p>
    );
  }

  if (historicalData) {
    return (
      <>
          <div>
            <p>$`Close: {historicalData.Close}`</p>
            <p>$`Open: {historicalData.Open}`</p>
            <p>$`Daily High: {historicalData.DailyHigh}`</p>
            <p>$`Daily Low: {historicalData.DailyLow}`</p>
          </div>
      </>
    );
  }

  return <p>Loading...</p>;
};

export default Historical;
