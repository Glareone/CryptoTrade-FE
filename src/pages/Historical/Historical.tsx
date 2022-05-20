import React, { useEffect, useContext, useState } from 'react';
import errorActions from '../../context/reducers/error/error-actions';
import historicalActions from '../../context/reducers/user/historical-actions';
import AppContext from '../../context/store';
import config from '../../common/config';
import { IHistoricalData } from '../../common/types/historical';
import { ErrorDetails, IResponseTemplate } from '../../common/types/response-template';

const Historical = () => {
  const [
    {
      error: { errors }
    },
    dispatch
  ] = useContext(AppContext);
  const [historicalData, setHistoricalData] = useState<IHistoricalData>();
  const [responseTemplateErrors, setErrors] = useState<ErrorDetails>();

  useEffect(() => {
    setTimeout(() => {
      fetch(`${config.backendUrl}/api/historicalData/?aggregationInterval=0`)
        .then((response) => {
          return response.json()
        })
        .then((responseTemplate: IResponseTemplate<IHistoricalData>) => {
          //dispatch({ type: historicalActions.SET_HISTORICAL_DATA, payload: responseTemplate.Content });
          responseTemplate.Content && setHistoricalData(responseTemplate.Content);
          responseTemplate.ErrorDetails && setErrors(responseTemplate.ErrorDetails);
        })
        .catch((error) => {

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
            <p>Close: {historicalData.Close}</p>
            <p>Open: {historicalData.Open}</p>
            <p>Daily High: {historicalData.DailyHigh}</p>
            <p>Daily Low: {historicalData.DailyLow}</p>
          </div>
      </>
    );
  }

  if (responseTemplateErrors) {
    return(
      <div>
        <p>Error Code: {responseTemplateErrors.ErrorCode}</p>
        <p>Error Message: {responseTemplateErrors.Message}</p>
        {responseTemplateErrors?.Details?.map(error => (<p>error</p>))}
      </div>)
  }

  return <p>Loading...</p>;
};

export default Historical;
