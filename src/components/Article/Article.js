// import './Main.scss';

function Article() {
  return (
    <div className="articlecontainer">
      {/* loopa article */}
      <div className="articletextsection">
        {/* interpolera heading */}
        <h2 className="articleheading">
            This is a short heading
        </h2>
        {/* interpolera articledate */}
        <h3 className="articledate">
            18-12-20
        </h3>
        <div className="articlecopy">
        {/* interpolera articlecopy */}
            <p className="medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
        </div>
      </div>
      <div class="articleleftsection">
        {/* interpolera articleimage */}  
        <div className="articleimage">
        </div>

        <div className="articleplaceinformation">

          {/* interpolera articleplacename */}  
          <h2 className="articleplacename">
            AFURI - Ramen Restaurant  
          </h2>

          <p className="big articleadressinfo">
            <span>Adress: </span>
            {/* interpolera articleplaceadress */}  
            <span className="articleplaceadress">
              Tokyo, Shibuya City, Sendagaya, 3 Chome−63−1
            </span>
          </p>

          <p className="big articleopeninghoursinfo">
            <span>Opening hours: </span> 
            {/* interpolera articleplaceopeninghours */}  
            <span className="articleplaceopeninghours">
            11-22
            </span>
          </p>

        </div>

        {/* interpolera articleimagesecond */}  
        <div className="articleimagesecond">
        </div>
      </div>
    </div>
  );
}

export default Article;