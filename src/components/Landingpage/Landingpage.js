import '../../Main.scss';
import React from 'react';
import AllArticles from './AllArticles';
import LandingpageInfo from './LandingpageInfo';

//getlementbyclassname för att sedan kunna ändra klassnamn 
//på vartannat element och byt färg
    
function LandingPage() {


return (
    <div className="landingpagecontainer">
        <div className="allarticlescontainer">
            <AllArticles></AllArticles>
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
                <LandingpageInfo></LandingpageInfo>         
            </div>
        </div>
    </div>
    );
}

export default LandingPage;