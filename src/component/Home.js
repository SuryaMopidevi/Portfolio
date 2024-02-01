import React, { useState ,useEffect} from 'react'
import './home.css'
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Typed from 'typed.js';
import me from './wall4.jpeg'
function Home() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
    } else {
      console.log('No file selected');
    }
  };
  useEffect(() => {
    const options = {
      strings: ['Software Developer', 'Python Developer', 'Software Engineer'],
      typeSpeed: 50,
      backSpeed: 25,
    };

    const typed = new Typed('.text', options);
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className='content'>
      <div className='first'>
        <div>
        <h3> Hello ,it's Me</h3>
        <h1>Mopidevi Surya</h1>
        <h3>And I'm a <span className="text"></span></h3>
        <p className='start'>A software developer is a professional who specializes in creating, designing, and maintaining software applications. These individuals play a crucial role in the development lifecycle, contributing their expertise to produce high-quality, functional, and efficient software solutions.</p>
        <div>
          <FontAwesomeIcon className='icon' icon={faInstagram} size="5x" style={{ margin: '0 10px' }} />
          <FontAwesomeIcon className='icon' icon={faGithub} size="2x" style={{ margin: '0 10px' }} />
          <FontAwesomeIcon className='icon' icon={faPhone} size="2x" style={{ margin: '0 10px' }} />
          <FontAwesomeIcon className='icon' icon={faLinkedin} size="2x" style={{ margin: '0 10px' }} />
          <FontAwesomeIcon className='icon' icon={faEnvelope} size="2x" style={{ margin: '0 10px' }} />
          <br /><br /><Button className='aboutMe'>More About Me</Button>
        </div>
      </div>
      <div >
        <div className='PhotoAdd'>
        {/* <div className={`PhotoAdd ${loaded ? 'loaded' : ''}`}> */}

        <img className='image' src={me} alt="Profile Photo" />
        </div>
      
        <h2>Upload Photo</h2>
        <Form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Select Photo</Form.Label><br />
            <Form.Control type="file" onChange={handleFileChange} />
            <Button className="upload" onClick={handleUpload}>
              Upload
            </Button>
          </Form.Group>
        </Form>
      </div>
      </div>
      <div className='AdditionalInfo'>
        <h2>About<span>ME</span></h2>
        <h4>Software Engineer</h4>
        <p className='intro'>Hello! 👋 I'm <span>Mopidevi Pavitra Surya</span>, an enthusiastic student pursuing a Bachelor's Degree at Indian Institute of Information and Technology,Sricity with a passion for Software Developer.
          🚀 My academic journey has honed my skills in <span>Python, DSA ,OOPS ,Full ,Stack development ,SQL, MYSQL</span>. Through hands-on experience in Drug target interaction and prediction using ml,health stack using mern stack,library management system using OOPS. I've gained practical insights and problem-solving abilities.
         💡 Eager to contribute my knowledge and skills, I'm excited about making a positive impact in the field. Let's connect and explore the possibilities together! 🌟
        </p>
      </div>
      <div className="footer">
        <footer >
        <div>
          <header className='part1'>
            <a className='logo1'  href='http://localhost:3000/#' alt=''>PortFolio</a>
            <div className='part2'>
              <a href='http://localhost:3000/#' alt='home'>Home</a>
              <a href='http://localhost:3000/#' alt='privacy' >privacy</a>
              <a href='http://localhost:3000/#' alt='policy' >policy</a>
              <a href='http://localhost:3000/#' alt='contact'>Contact</a>
            </div>
          </header>
        </div>
          <div className='icons'>
            <FontAwesomeIcon  className='icon' icon={faInstagram} size="2x" style={{ margin: '0 10px' }} />
            <FontAwesomeIcon  className='icon' icon={faGithub} size="2x" style={{ margin: '0 10px' }} />
            <FontAwesomeIcon  className='icon' icon={faPhone} size="2x" style={{ margin: '0 10px' }} />
            <FontAwesomeIcon  className='icon' icon={faLinkedin} size="2x" style={{ margin: '0 10px' }} />
            <FontAwesomeIcon  className='icon' icon={faEnvelope} size="2x" style={{ margin: '0 10px' }} />
          </div>
          <p>&copy; 2024  Surya. All Rights Reserved.</p>
        </footer>
      </div>
    </div>

  )
}

export default Home