import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

// export const getStory = async storyId => {
//     const result = await axios
//         .get(`${storyUrl + storyId}.json`)
//         .then(({data}) => data);
//     return result;
// };

export const getStoryIds = async () => {
    console.log(newStoriesUrl);
    // const result = await axios.get(newStoriesUrl).then(data => data); this line returns all data
    const result = await axios.get(newStoriesUrl).then(({data}) => data); // this line returns just the numberset?

    console.log(result);
    return result;
};