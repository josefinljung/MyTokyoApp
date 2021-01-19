import '../../Main.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
    
function LandingpageInfo() {

    const [oldarticles, setoldarticles] = useState([]);

    function allArticles(res){
        setoldarticles(res)
    }

    useEffect( () => {
        axios.get("http://localhost:8000/articles").then(theData => {
            allArticles(theData.data.map((article) => {;
                    return(
                        <div className="olderarticle">
                            <div className="olderarticleimage">
                                <img src={article.Image} alt="older articles"></img>
                            </div>
                            <h4> {article.Title}</h4>
                        </div>            
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