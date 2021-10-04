import { getStoryIds, getStory } from '../services/hnApi';
import React, { useEffect, useState } from 'react';
import { Story } from '../components/Story'

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
        
        // getStory(2921983).then(data => console.log(data));
    }, [])

    
    // return storyIds.map(storyId => <Story storyId={'farts'}/>);
    return storyIds.map(storyId => <Story storyId={storyId}/>);
 
}