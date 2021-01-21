import fblogo from  '../../assets/facebook.svg';
import iglogo from  '../../assets/instagram.svg';
import letterlogo from '../../assets/email.svg';
import aboutus from '../../assets/aboutus.jpg'
import maplogo from '../../assets/map-marker.svg';

function Inspiration() {
  return (
    <div className="inspirationcontainer">
      <div className="inspirationsection">
        <div className="inspirationtextsection">
          <h2 className="inspirationheading">
            This is a supercool shop.
          </h2>
          <p className="inspirationcopy big">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a lacinia ex. Nulla quis metus ac nulla sodales auctor eu vel augue. Donec ut sapien sit amet tellus pharetra vulputate. 
          </p>
          <div className="inspirationicons">
            <span>
              <img src={iglogo} alt="instagram" className="iglogo" />
            </span>
            <span>
              <img src={fblogo} alt="facebook" className="fblogo" />
            </span>
            <span>
              <img src={letterlogo} alt="letter" className="letterlogo" />
            </span>
            <span>
              <img src={maplogo} alt="maplogo" className="maplogo" />
            </span>
          </div>
        </div>
        <div className="inspirationimage">
          <img alt="inspiration" src={aboutus} className="test"></img>
        </div>
      </div> 

      <div className="inspirationsection">
        <div className="inspirationtextsection">
          <h2 className="inspirationheading">
            {/* interpolera ut rubrik */}
            Here’s a list of our top five books about sustainable living.</h2>
          <p className="inspirationcopy big">
            {/* interpolera ut brödtext */}
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Nullam sagittis lorem ut quam porttitor consectetur.</li>
              <li>In eu ante auctor justo efficitur pharetra.</li>
              <li>Integer ut risus sed tortor ultrices pharetra rutrum sed elit.</li>
              <li>Suspendisse et velit feugiat, lobortis massa non, consequat ligula.</li>
            </ul>
          </p>
          <div className="inspirationicons">
            <span>
              <img src={iglogo} alt="instagram" className="iglogo" />
            </span>
            <span>
              <img src={fblogo} alt="facebook" className="fblogo" />
            </span>
            <span>
              <img src={letterlogo} alt="letter" className="letterlogo" />
            </span>
            <span>
              <img src={maplogo} alt="maplogo" className="maplogo" />
            </span>
          </div>
        </div>
        <div className="inspirationimage">
          {/* interpolera ut inspobild */}
          <img alt="inspiration" src={aboutus} className="test"></img>
        </div>
      </div>

      <div className="inspirationsection">
        <div className="inspirationtextsection">
          <h2 className="inspirationheading">
            A sunday market in Harajuku that sells organic vegetables.
          </h2>
          <p className="inspirationcopy big">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a lacinia ex. Nulla quis metus ac nulla sodales auctor eu vel augue. Donec ut sapien sit amet tellus pharetra vulputate. 
          </p>
          <div className="inspirationicons">
            <span>
              <img src={iglogo} alt="instagram" className="iglogo" />
            </span>
            <span>
              <img src={fblogo} alt="facebook" className="fblogo" />
            </span>
            <span>
              <img src={letterlogo} alt="letter" className="letterlogo" />
            </span>
            <span>
              <img src={maplogo} alt="maplogo" className="maplogo" />
            </span>
          </div>
        </div>
        <div className="inspirationimage">
          <img alt="inspiration" src={aboutus} className="test"></img>
        </div>
      </div> 

    </div>
  );
}

export default Inspiration;