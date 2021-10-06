import { getStoryIds, getStory } from '../services/hnApi';
import React, { useEffect, useState } from 'react';
import { Story } from '../components/Story';
import { CheckH } from '../components/TestScroll';
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoriesContainerStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

// CheckH();
export const StoriesContainer = () => {
    const { count } = useInfiniteScroll();
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
        // getStory(2921983).then(data => console.log(data));
    }, [])

    
    // return storyIds.map(storyId => <Story storyId={'farts'}/>);
    // return storyIds.map(storyId => <Story key={storyId} storyId={storyId}/>)
    console.log(window);
    return (
        <>
        <GlobalStyle />
        <StoriesContainerWrapper data-test-id="stories-container" className="butts">
            <h1>Hacker News Stories</h1>
            {storyIds.slice(0, count).map(storyId => <Story key={storyId} storyId={storyId}/>)}
        </StoriesContainerWrapper>
        </>
    );
};
