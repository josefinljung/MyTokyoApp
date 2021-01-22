import fblogo from  '../../assets/facebook.svg';
import iglogo from  '../../assets/instagram.svg';
import letterlogo from '../../assets/email.svg';
import maplogo from '../../assets/map-marker.svg';
import img1 from '../../assets/inspo1.jpg'
import img2 from '../../assets/inspo2.jpg'

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
          <img alt="inspiration" src={img1} />
        </div>
      </div> 
      <div className="inspirationsection">
        <div className="inspirationtextsection">
          <h2 className="inspirationheading">
            Here’s a list of our top five favourite books about sustainable living.</h2>
          <p className="inspirationcopy big">
            <ul>
              <li>Lorem ipsum dolor sit amet - Consectetur Adipiscing Elit</li>
              <li>Nullam sagittis lorem ut - Quam Porttitor Consectetur</li>
              <li>In eu ante auctor justo - Efficitur Pharetra</li>
              <li>Integer ut risus sed tortor ultrices pharetra - Rutrum sed Elit.</li>
              <li>Suspendisse et velit feugiat, lobortis massa non - Consequat Ligula</li>
            </ul>
          </p>
        </div>
        <div className="inspirationimage">
          <img alt="inspiration" src={img2} />
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
          <img alt="inspiration" src={img1} />
        </div>
      </div> 
    </div>
  );
}

export default Inspiration;