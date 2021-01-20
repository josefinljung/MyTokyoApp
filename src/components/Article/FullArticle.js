import '../../Main.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function FullArticle(props) {
    const articleId = props.match.params.id;
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
                return(
                    <div key={article.Id}>

                        {article.Title}
                        
                    </div>
                )
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