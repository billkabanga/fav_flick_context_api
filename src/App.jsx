import React, { Fragment, useContext } from 'react';
import { Store } from './Store';

const App = () => {
  const store = useContext(Store);
  return (
    <Fragment>
      {console.log('store----', store)}
      <div>
        <h1>Favourite Flick Site</h1>
        <p>Pick your favourite flicks/series</p>
      </div>
    </Fragment>
  )
}

export default App;
