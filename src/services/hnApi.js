import axios from 'axios';

import { selectFields } from '../utils/selectFields';
export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async storyId => {
    const result = await axios
        .get(`${storyUrl + storyId}.json`)
        // .then(({data}) => data); //grabs all data from every id
        .then(({data}) => data && selectFields(data)); // grabs select data through function //data && makes sure there is actually data passed
    console.log(`get story: ${result}`)
    return result;
};

export const getStoryIds = async () => {
    console.log(newStoriesUrl);
    // const result = await axios.get(newStoriesUrl).then(data => data); this line returns all data
    const result = await axios.get(newStoriesUrl).then(({data}) => data); // this line returns just the numberset?

    console.log(result);
    return result;
};