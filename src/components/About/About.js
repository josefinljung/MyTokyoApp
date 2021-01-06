// import './Main.scss';
import aboutus from '../../assets/aboutus.jpg'

function About() {
  return (
  <div className="aboutcontainer">
    <div className="abouttextcontainer">
      <h2 className="aboutheading">Hi! We’re the people behind this page, Mika & Sam!</h2>
      <p className="abouttext medium">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel lorem in magna feugiat scelerisque. Fusce a libero nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus eros metus, maximus id neque sed, sollicitudin lobortis eros. Morbi fermentum, dui ullamcorper fringilla blandit, est ligula condimentum tellus, non commodo metus mauris nec turpis. Nullam eleifend interdum dui vel accumsan. Mauris lorem sapien, imperdiet eget sem eget, mattis varius felis. Aliquam accumsan lectus in eros finibus sollicitudin. Duis pharetra tortor lacus, a rutrum risus placerat in. Maecenas vel ipsum dapibus, varius enim ullamcorper, vulputate dolor. Vivamus non est vel quam commodo tincidunt.
      </p>
    </div>
    <div className="aboutimagecontainer">
      <img src={aboutus} alt="about us" className="aboutimage" />
    </div>
  </div>
  );
}

export default About;