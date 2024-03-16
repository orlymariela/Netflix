import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'

import request from '../Request'

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowID='1'title='UpComing' fecthURL={request.requestUpcoming}/>
        <Row rowID='2'title='Trending' fecthURL={request.requestTrending}/>
        <Row rowID='3'title='Popular' fecthURL={request.requestPopular}/>
        <Row rowID='4'title='TopRated' fecthURL={request.requestTopRated}/>
        <Row rowID='5'title='Horror' fecthURL={request.requestHorror}/>
        
          
    </div>
  )
}

export default Home
