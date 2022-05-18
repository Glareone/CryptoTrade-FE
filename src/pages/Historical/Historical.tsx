import React, { useEffect, useContext } from 'react';
import errorActions from '../../context/reducers/error/error-actions';
import historicalActions from '../../context/reducers/user/historical-actions';
import AppContext from '../../context/store';

const Historical = () => {
  const [
    {
      historical: { historicalReplies },
      error: { errors }
    },
    dispatch
  ] = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://api.github.com/users")
        .then((response) => response.json())
        .then((users) => {
          debugger;
          dispatch({ type: historicalActions.SET_HISTORICAL_DATA , payload: users });
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

  if (historicalReplies && historicalReplies.length > 0) {
    return (
      <>
        {historicalReplies.map((post: any) => (
          <div key={post.id}>{post.login}</div>
        ))}
      </>
    );
  }

  return <p>Loading...</p>;
};

export default Historical;
