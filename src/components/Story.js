import React, {useState, useEffect} from 'react';
// import getStory from '../services/hnApi';
import { getStory } from '../services/hnApi';
import { StoryMeta, StoryMetaElement, StoryTitle, StoryWrapper } from '../styles/Styles';
import { CheckH } from './TestScroll';
import { mapTime } from '../mappers/mapTime';

mapTime();
// export const Story = props => {
export const Story = ({ storyId }) => {
    // const height = document.getElementById('story-wrapper').innerHeight;
    // console.log(StoryWrapper.innerHeight);
    // const banana = "banana";
    const [story, setStory] = useState({});
    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);
    
    
    return story && story.url ? (
        
    <StoryWrapper data-testid="story" id="story-wrapper">
        <StoryTitle>
            <a href={story.url}>
                {story.title}
            </a>
        </StoryTitle>
        <StoryMeta>
            <span className="story__by" data-testid="story-by">
                <StoryMetaElement color="#000">By:</StoryMetaElement> {story.by}
            </span>
            <span className="story__time" data-testid="story-time">
                <StoryMetaElement color="#000">Posted:</StoryMetaElement> {` `}
                {mapTime(story.time)}
            </span>
        </StoryMeta>
        
        
    </StoryWrapper>
    
    // JSON.stringify(story)
    ) : null;
    // return <p>{JSON.stringify(story)}</p> // returns all data connected to story id
    // return(<p>{storyId}</p>);
    // return(<p>{JSON.stringify(props)}</p>);
};
