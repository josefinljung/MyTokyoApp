import '../../Main.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

//getlementbyclassname för att sedan kunna ändra klassnamn 
//på vartannat element och byt färg
    
function LandingPage() {

    const [articles, setarticles] = useState([]);

    function allArticles(res){
        setarticles(res)
    }

    useEffect( () => {
        axios.get("http://localhost:8000/articles").then(theData => {
            allArticles(theData.data.map((article) => {;
                    return(
                        <div className="singlearticlecontainer" key={article.id}>
                        <div className="articletextsection">
                            <h4 className="articleheading">
                                {article.Title}
                            </h4>
                            <h4 className="articledate">
                                {article.Date}
                            </h4>
                            <div className="articlecopy">
                                <p className="small">
                                    {article.Copy}
                                </p>
                            </div>
                        </div>
                        <div className="articleimage">
                            <img src={article.Image} alt="articleimage" />
                        </div>
                        </div>
                    )
                }));
        })
    }, [] )
    
return (
      <div className="landingpagecontainer">
        <div className="allarticlescontainer">
        {articles} 
        </div> 
        <div className="landingpageinfo">
            <div className="didyouknowcontainer">
                <h3>Did you know?</h3>
                <p className="medium">
                    Quisque commodo risus sollicitudin elit dapibus porta. Mauris eu odio tincidunt, varius neque nec, blandit erat. Sed non semper turpis. Donec condimentum, tellus sit amet tincidunt pulvinar, metus augue viverra lectus, in cursus diam lorem sit amet dui. Suspendisse porta dignissim accumsan. Ut lacinia ipsum viverra elit viverra pharetra. Suspendisse quam odio, auctor mattis eleifend id, iaculis id risus.
                </p>
            </div>
            <div className="olderarticlescontainer">
                <h3 className="olderarticlesheading">Older articles</h3>
                
                <div className="olderarticle">
                    <div className="olderarticleimage">
                    </div>
                    <h4>A short yet powerful heading</h4>
                </div>

                <div className="olderarticle">
                    <div className="olderarticleimage">
                    </div>
                    <h4>This is a very very very long heading and it probably says something super interesting</h4>
                </div>

                <div className="olderarticle">
                    <div className="olderarticleimage">
                    </div>
                    <h4>Another header</h4>
                </div>

            </div>
            
        </div>
    </div>
    );
}

export default LandingPage;