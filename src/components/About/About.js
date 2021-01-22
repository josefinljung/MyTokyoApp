import aboutus from '../../assets/aboutus.jpg'

function About() {
  return (
  <div className="aboutcontainer">
    <div className="abouttextcontainer">
      <h2 className="aboutheading">Hi! We’re the people behind this page, Mika & Sam!</h2>
      <p className="abouttext medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel lorem in magna feugiat scelerisque. Mauris lorem sapien, imperdiet eget sem eget, mattis varius felis. Aliquam accumsan lectus in eros finibus sollicitudin. Duis pharetra tortor lacus, a rutrum risus placerat in. Maecenas vel ipsum dapibus, varius enim ullamcorper, vulputate dolor. Vivamus non est vel quam commodo tincidunt.
      </p>
      <p className="abouttext medium">
        Duis pharetra tortor lacus, a rutrum risus placerat in. Maecenas vel ipsum dapibus, varius enim ullamcorper, vulputate dolor.  Duis pharetra tortor lacus, a rutrum risus placerat in. Maecenas vel ipsum dapibus, varius enim ullamcorper, vulputate dolor. Vivamus non est vel quam commodo tincidunt.
      </p>
    </div>
    <div className="aboutimagecontainer">
      <img src={aboutus} alt="about us" className="aboutimage" />
    </div>
  </div>
  );
}

export default About;