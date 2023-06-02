import React from "react";
import Achieve from "./Achieve.js";
import Banner from "./Banner.js";
import Fotter from "./Footer.js";
import classes from './Home.module.css';

const Home=()=>{

    return <div className={classes.main}> 
        <Banner></Banner>
        <Achieve></Achieve>
         <Fotter></Fotter>
    </div>

}
export default Home;