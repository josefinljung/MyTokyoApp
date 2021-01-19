import '../../Main.scss';
import fblogo from  '../../assets/facebook.svg';
import iglogo from  '../../assets/instagram.svg';
import letterlogo from '../../assets/email.svg';
import arrowup from '../../assets/arrowup.svg';


//html som syns i index

function FooterComponent() {
  return (
    <footer className="footer">
      <a className="scrolltotop" href="#header">
        <img src={arrowup} alt="scrolltotop" className="scrolltotoplogo" />
      </a>
        <div id="footercontainer">
          <div id="footerleft">
            <h3>
              Did you enjoy this site?
            </h3>
            <p className="medium">
              It was built by Josefin Ljung. Wanna get in touch with her? Feel free to send her an <a className="footerlink" href="mailto: josefin.ljung@hotmail.com">email</a>.
            </p>
          </div>
          <div id="footericons">
            <span>
              <img src={iglogo} alt="instagram" className="iglogo" />
            </span>
            <span>
              <img src={fblogo} alt="facebook" className="fblogo" />
            </span>
            <span>
              <img src={letterlogo} alt="letter" className="letterlogo" />
            </span>
          </div>
          <div id="footerright">
            <h3>
              Wanna share an idea with us?          
            </h3>
            <p className="medium">
              We’re always up for tips and inspiration for new articles to add to our page. Send us an email or contact us via Instagram or Facebook.
            </p>
          </div>
        </div>
    </footer>
  );
}

export default FooterComponent;
