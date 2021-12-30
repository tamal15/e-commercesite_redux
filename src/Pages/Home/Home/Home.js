import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import HomeProducts from '../HomeProducts/HomeProducts';
// import ReviewHome from '../ReviewHome/ReviewHome';
import HomeBlog from './HomeBlog/HomeBlog';

const Home = () => {
  
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            {/* <ReviewHome></ReviewHome> */}
            <HomeBlog></HomeBlog>
            <Footer></Footer>

         
      
        </div>
    );
};

export default Home;