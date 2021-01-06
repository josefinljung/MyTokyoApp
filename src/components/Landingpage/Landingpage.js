import '../../Main.scss';


//getlementbyclassname för att sedan kunna ändra klassnamn 
//på vartannat element och byt färg

function LandingPage() {

  return (
      <div className="landingpagecontainer">
        <div className="allarticlescontainer">
            {/* loopa article */}
            <div className="singlearticlecontainer">
                <div className="articletextsection">
                    {/* interpolera heading */}
                    <h4 className="articleheading">
                        This is a short heading
                    </h4>
                    {/* interpolera articledate */}
                    <h4 className="articledate">
                        18-12-20
                    </h4>
                    <div className="articlecopy">
                    {/* interpolera articlecopy */}
                        <p className="small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                        </p>
                    </div>
                </div>
                {/* interpolera articleimage */}
                <div className="articleimage">
                </div>
            </div>
            <div className="singlearticlecontainer">
                <div className="articletextsection">
                    <h4 className="articleheading">
                        This is a very very very long heading and it probably says something super interesting                    </h4>
                    <h4 className="articledate">
                        28-02-20
                    </h4>
                    <div className="articlecopy">
                        <p className="small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                        </p>
                    </div>
                </div>
                <div className="articleimage">
                </div>
            </div>
            <div className="singlearticlecontainer">
                <div className="articletextsection">
                    <h4 className="articleheading">
                        This is a longer heading and it will look like this                    </h4>
                    <h4 className="articledate">
                        12-01-20
                    </h4>
                    <div className="articlecopy">
                        <p className="small">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                        </p>
                    </div>
                </div>
                <div className="articleimage">
                </div>
            </div>
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
                    <div class="olderarticleimage">
                    </div>
                    <h4>A short yet powerful heading</h4>
                </div>

                <div className="olderarticle">
                    <div class="olderarticleimage">
                    </div>
                    <h4>This is a very very very long heading and it probably says something super interesting</h4>
                </div>

                <div className="olderarticle">
                    <div class="olderarticleimage">
                    </div>
                    <h4>Another header</h4>
                </div>

            </div>
            
        </div>
    </div>
    );
}

export default LandingPage;