import '../../Main.scss';



//html som syns i index


function LandingPage() {

  return (
      <div className="landingpagecontainer">
        <div className="allarticlescontainer">
            <div className="singlearticlecontainer">
                <div className="test">
                    <h4 className="articleheading">
                        This is a short heading
                    </h4>
                    <h4 className="articledate">
                        18-12-20
                    </h4>
                    <p className="articlecopy small">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </p>
                </div>
                <div className="articleImage">
                </div>
            </div>
        </div>
        <div className="landingpageinfo">
            <div className="funfact">
                <h3>Did you know?</h3>
                <p className="medium">
                    Quisque commodo risus sollicitudin elit dapibus porta. Mauris eu odio tincidunt, varius neque nec, blandit erat. Sed non semper turpis. Donec condimentum, tellus sit amet tincidunt pulvinar, metus augue viverra lectus, in cursus diam lorem sit amet dui. Suspendisse porta dignissim accumsan. Ut lacinia ipsum viverra elit viverra pharetra. Suspendisse quam odio, auctor mattis eleifend id, iaculis id risus.
                </p>
            </div>
        </div>
    </div>
    );
}

export default LandingPage;