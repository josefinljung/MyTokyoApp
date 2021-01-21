import '../../Main.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FullArticle(props) {

    const articleId = props.match.params._id;
    console.log(articleId)
    const [fullarticle, setfullarticle] = useState([]);

    function fullArticle(res){
        console.log(res)
        setfullarticle(res)
    }
    
    useEffect( () => {
        axios.get("http://localhost:8000/articles/?id=" + articleId ).then(theData => {
            console.log(theData.data)
            fullArticle(theData.data.map((article) => {
                if (article._id === articleId){ 
                return ( 
                    <div className="articlecontainer" key={article.Id}>
                    <div className="articletextsection">
                      <h2 className="articleheading">
                        {article.Title}
                      </h2>
                      <h3 className="articledate">
                        {article.Date}
                      </h3>
                      <div className="articlecopy">
                          <p className="medium">
                          {article.Copy}
                          </p>
                      </div>
                      <div className="articlecopy">
                          <p className="medium">
                          {article.Copy2}
                          </p>
                      </div>
                    </div>
                    <div className="articleleftsection"> 
                      <div className="articleimage">
                        <img src={article.Image} alt="articleimage" />
                      </div>

                      <div className="articleplaceinformation">
                        <h2 className="articleplacename">
                          {article.PlaceName}  
                        </h2>              
                        <p className="big articleadressinfo">
                          <span>Adress: </span> 
                          <span className="articleplaceadress">
                            {article.PlaceAdress}
                          </span>
                        </p>              
                        <p className="big articleopeninghoursinfo">
                          <span>Opening hours: </span> 
                          <span className="articleplaceopeninghours">
                            {article.PlaceOpeningHours}
                          </span>
                        </p>              
                      </div>

                      <div className="articleimagesecond">
                        <img src={article.ExtraImage} alt="articleimage" />
                      </div>
                    </div>
                  </div>
                )}
                
                else {return ('')}

            }));
        })
    }, [articleId] )

    return (

        <div>
            {fullarticle}
        </div>

    );
}

export default FullArticle;