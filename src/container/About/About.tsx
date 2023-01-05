import './About.scss';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import images from '../../constants/images';

const About = () => {
  const galleryImages = [images.emilie1, images.emilie2, images.emilie3];

  const calculateAge = () => {
    const birthday = new Date('January 12, 1996').getTime();
    const ageDifMs = Date.now() - birthday;
    const ageDate = new Date(ageDifMs); // milliseconds from epoch

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <>
      <h2 className="head-text">
        a little bit about <span>myself</span>
      </h2>
      <div className="about__gallery">
        {galleryImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Portrait of Emilie ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="about__content">
        <p className="about__text">
          I am a {calculateAge()}-year-old frontend developer with an eye for
          design and structure. I am meticulous and good at seeing what needs to
          be done.
        </p>
        <p className="about__text">
          I am a conscientious and responsible person with a positive attitude.
          I'm a cheerful girl who enjoys spreading the joy of life. I am
          passionate about creating a good environment where everyone is looked
          after, heard, and appreciated. I really enjoy working with others, but
          I also enjoy working independently.
        </p>
        <p className="about__text">
          I love learning new things and developing myself as a person and in my
          professional field. Constructive criticism and debate are always
          welcome as they help me improve as developer and person.
        </p>
        <div className="header__button-group">
          <a
            href={images.englishResume}
            download
            className="button button__primary"
          >
            English Resume
          </a>
          <a
            href={images.englishResume}
            download
            className="button button__secondary"
          >
            Norwegian Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, 'about'), 'about', 'app__primarybg');
