import styled from 'styled-components';

export const FeedbackTitle = styled.h2`
    text-transform: uppercase;
    text-decoration: underline;
    color: tomato;
    text-align: left;
`
export const StatisticList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: left;
    list-style: none;
`
export const StatisticItem = styled.li`
   margin: 0 10px;
   border: 1px solid grey;
   padding: 4px;
   border-radius: 2px;
   background-color: rgb(187, 185, 185);
   cursor: pointer;
`