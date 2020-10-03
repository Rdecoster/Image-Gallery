import React from 'react';
import LikeShare from './LikeShare.jsx'
import Rating from './Rating.jsx'
import styled from 'styled-components';


const Title = styled.div `
grid-area: title;
`
const RatingWrapper = styled.div `
grid-area: rating;

`

const LocationWrapper = styled.div `
grid-area: location;
display: flex;
flex-wrap: nowrap;
`

const LikeWrapper = styled.div `
grid-area: likeShare;
`
const HeaderWrapper = styled.div `
width: 1280px;
display: grid;
overflow: visible!important!;

grid-gap:8px;
grid-template-columns: 80px 260px auto auto 150px;
grid-template-rows: 60px 60px;
  grid-template-areas:  "title title title . ."
                        "rating location . . likeShare";
                        align-items: center;
`

function Header({data}) {
const location = data[0].location;
const city = location.split(',')[0];
const name = data[0].name;
const isLiked = data[0].is_liked

  return (

    <div>
      <HeaderWrapper >


          <Title city={city} name={name} >
          <div className ="title"><h1 tabIndex="-1">{name} in {city} </h1></div>
          </Title>

            <RatingWrapper>
              <Rating data={data}/>
            </RatingWrapper>
            <LocationWrapper data={location}>
            <span ><span ><a rel="noopener noreferrer"  href="https://airbnb.com/s/San%20Francisco,California,United%20States/homes" >{location}</a></span></span>
            </LocationWrapper>
          <LikeWrapper>
          <LikeShare isLiked={isLiked} />
          </LikeWrapper>
      </HeaderWrapper>
    </div>

  );
}

export default Header;
