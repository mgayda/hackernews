// export const App = () => <p>Hello!</p>
// import React, { useEffect, useState } from 'react';
// import { getStoryIds } from './services/hnApi';

// export const App = () => {
//     const [storyIds, setStoryIds] = useState([]);

//     useEffect(() => {
//         // setStoryIds('hello bro'); 1
//         getStoryIds().then(data => setStoryIds(data));
//     }, [])

//     // ^^ life cycle array [] vs hooks
//     // array loops back through whatever is put inside of it
//     //if put storyIds insides, then every time it gets a new story id
//     // it will rerun and re call setStoryIds

//     return <p>{JSON.stringify(storyIds)}</p>
//     // return <p>{storyIds}</p> 1
// }

import { StoriesContainer } from './containers/StoriesContainer'; 

export const App = () => <StoriesContainer />;


