import '../../Main.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
    
function LandingpageInfo() {

    const [oldarticles, setoldarticles] = useState([]);

    function allArticles(res){
        setoldarticles(res)
    }

    useEffect( () => {
        axios.get("http://localhost:8000/articles").then(theData => {
            allArticles(theData.data.map((article) => {;
                    return(
                        <Link to={'/articles/' + article._id}>
                            <div key={article.Id} className="olderarticle">
                                <div className="olderarticleimage">
                                    <img src={article.Image} alt="older articles"></img>
                                </div>
                                <h4> {article.Title}</h4>
                            </div>  
                        </Link>
          
                       )
                }));
        })
    }, [] )

return (
    <React.Fragment>
    {oldarticles}
    </React.Fragment>
)};

export default LandingpageInfo;