import React, { Fragment, useContext, useEffect } from 'react';
import { Store } from './Store';

const App = () => {
  const { state, dispatch } = useContext(Store);

  const fetchDataAction = async () => {
    const data = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    });
  };

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  })

  return (
    <Fragment>
      {console.log('store----', state)}
      <div>
        <h1>Favourite Flick Site</h1>
        <p>Pick your favourite flicks/series</p>
        <div>
          {
            state.episodes.map(episode => {
              return (
                <div key={episode.id}>
                  <img src={episode.image.medium} alt={`${episode.name}`} />
                  <div>{episode.name}</div>
                  <div>
                    Season: {episode.season} Episode: {episode.number}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </Fragment>
  )
}

export default App;
