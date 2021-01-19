import '../../Main.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
    
function AllArticles() {

    const [articles, setarticles] = useState([]);

    function allArticles(res){
        setarticles(res)
    }

    useEffect( () => {
        axios.get("http://localhost:8000/articles").then(theData => {
            allArticles(theData.data.map((article) => {;
                    return(
                        <div className="singlearticlecontainer" key={article._id}>
                            <div className="articletextsection">
                                <h4 className="articleheading">
                                    <Link to={`/article/${article._id}`}>{article.Title}</Link>
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
    <React.Fragment>
    {articles}
    </React.Fragment>
)};

export default AllArticles;