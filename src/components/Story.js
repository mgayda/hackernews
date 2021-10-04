import React, {useState, useEffect} from 'react';
// import getStory from '../services/hnApi';
// import { getStory } from '../services/hnApi';

// export const Story = props => {
export const Story = ({ storyId }) => {
    const [story, setStory] = useState({});
    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);
    
    return <p>{JSON.stringify(story)}</p>
    // return(<p>{storyId}</p>);
    // return(<p>{JSON.stringify(props)}</p>);
}