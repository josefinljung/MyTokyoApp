import '../../Main.scss';


//html som syns i index

function FooterComponent() {
  return (
    <footer className="footer">
      <div id="footercontainer">
        <div id="footerleft">
          <h3>
            Did you enjoy this site?
          </h3>
          <p class="medium">
            It was built by Josefin Ljung. Wanna get in touch with her? Feel free to send her an <a class="footerlink" href="mailto: josefin.ljung@hotmail.com">email</a>.
          </p>
        </div>
        <div id="footericons">
          <span>
            :)
          </span>
          <span>
            :)
          </span>
          <span>
            :)
          </span>
        </div>
        <div id="footerright">
          <h3>
            Wanna share an idea with us?          
          </h3>
          <p class="medium">
            We’re always up for tips and inspiration for new articles to add to our page. Send us an email or contact us via Instagram or Facebook.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
