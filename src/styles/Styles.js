import styled from 'styled-components';

export const StoryWrapper = styled.section `
padding-top: 10px;
margin-bottom: 20px;
border-top: 1px solid #ccc;

&:first-of-type {
    border-top: 0;
}

&:last-of-type {
    border-bottom: 0;
    padding-bottom: 20px;
}
`;

export const StoryTitle = styled.h1`
margin-bottom: 5px;
font-size: 18px;
line-height: 1.8;
margin: 0;
text-decoration: none;

a{
    color: #2e2e2c;
    background-color: #f8dc3d;
    text-decoration: none;
}
`;

export const StoryMeta = styled.div`
font-style: italic;
> span::not()(:first-child):before {
    content: '.';
    margin: 0 7px;
}

.story__meta-bold {
    font-weight: border-left;
}

.story__time, .story__by {
    /* display: block; */
    /* padding: 5px 0px; */
    padding: 0px 5px 0;
}
`;

export const StoryMetaElement = styled.span`
    font-weight: bold;
    color: ${props => props.color || 'red'};
`;

<StoryMetaElement />