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
          It was built by Josefin Ljung. Wanna get in touch with her? Feel free to send her an email!
          </p>
        </div>
        <div id="footericons">
          <p>
            :) :) :)
          </p>
        </div>
        <div id="footerright">
          <h3>
            Wanna share an idea with us?          
          </h3>
          <p class="medium">
          It was built by Josefin Ljung. Wanna get in touch with her? Feel free to send her an email!
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
