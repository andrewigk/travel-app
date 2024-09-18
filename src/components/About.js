import about from '../images/about.jpeg'
import Title from './Title'

const About = () => {
  return (
    <>
      <section className="section" id="about">
        <Title title="about" subTitle="us"></Title>
        <div className="section-center about-center">
          <div className="about-img">
            <img src={about} className="about-photo" alt="awesome beach" />
          </div>
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
              Continue exploring the world with our travel service agency!
              Whether you're looking to uncover hidden gems or revisit your
              favorite destinations, we’re here to make every journey
              unforgettable.
            </p>
            <p>
              With tailored itineraries, exclusive deals, and personalized
              support, we ensure that your travel experiences are seamless and
              inspiring. Let us handle the details, so you can focus on creating
              lasting memories. Your next adventure is just a click away!
            </p>
            <a href="#about" className="btn">
              Read more
            </a>
          </article>
        </div>
      </section>
    </>
  )
}
export default About
