import React from 'react'
import Chart from '../../Chart/Chart';
import FeaturedInfo from '../../featuredInfo/FeaturedInfo';
import "./Home.css";
const Home = () => {
    return (
        <div className="home">
           <FeaturedInfo />
           <Chart />
        </div>
    )
}

export default Home
