import React, {useState, useEffect} from 'react';
// import { getStory } from '../services/hnApi';

// export const Story = props => {
export const Story = ({ storyId }) => {
    useEffect(() => {
        
    }, []);
    
    return(<p>{storyId}</p>);
    // return(<p>{JSON.stringify(props)}</p>);
}