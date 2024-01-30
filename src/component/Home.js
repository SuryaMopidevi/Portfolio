import React ,{ useState }from 'react'
import './home.css'
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Home() {
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
    };
  
    const handleUpload = () => {
      // Implement your upload logic here
      if (selectedFile) {
        console.log('Uploading file:', selectedFile);
        // You can use APIs like fetch or axios to send the file to your server
        // Example: fetch('/upload', { method: 'POST', body: formData });
      } else {
        console.log('No file selected');
      }
    };
  return (
    <div className='content'>
      <div>
        <h3> Hello ,it's Me</h3>
        <h1>Mopidevi Surya</h1>
        <h3>And I'm a Software DEVELOPER</h3>
        <p>A software developer is a professional who specializes in creating, designing, and maintaining software applications. These individuals play a crucial role in the development lifecycle, contributing their expertise to produce high-quality, functional, and efficient software solutions.</p>
      </div>
      <div>
      <FontAwesomeIcon className='icon' icon={faInstagram} size="2x" style={{ margin: '0 10px' }} />
      <FontAwesomeIcon className='icon' icon={faFacebook} size="2x" style={{ margin: '0 10px' }} />
      <FontAwesomeIcon className='icon' icon={faWhatsapp} size="2x" style={{ margin: '0 10px' }} />
      <FontAwesomeIcon className='icon' icon={faGoogle} size="2x" style={{ margin: '0 10px' }} />
      <br/><br/><Button className='aboutMe'>More About Me</Button>
    </div>
      <div className='PhotoAdd'>
      <h2>Upload Photo</h2>
      <Form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Select Photo</Form.Label><br/>
          <Form.Control type="file" onChange={handleFileChange} />
          <Button className="upload" onClick={handleUpload}>
          Upload
        </Button>
        </Form.Group>
      </Form>
    </div>
    </div>

  )
}

export default Home