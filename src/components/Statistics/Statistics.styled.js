import styled from 'styled-components';

export const FeedbackTitle = styled.h2`
    text-transform: uppercase;
    text-decoration: underline;
    color: tomato;
    text-align: left;
    margin-bottom: 40px;
`
export const StatisticList = styled.ul`
    display: flex;
    justify-content: left;
    flex-direction: column;
`
export const StatisticItem = styled.li`
   display: flex;
   justify-content: space-between;
   border: 1px solid grey;
   padding: 4px 10px;
   border-radius: 2px;
   background-color: rgb(187, 185, 185);
   font-size: 24px;
   font-weight: 600;
   color: #000000;
`