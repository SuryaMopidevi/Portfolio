import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './footer.css'
import { Button } from 'bootstrap';

export default function footer(props) {
  return (
    <div className="footer" ref={props.x}>
        <footer >
          <a className='logo1'  href='http://localhost:3000/#' alt=''><span>M</span>surya</a><br/>
          <div className='mainFooter'>
              <div className='part1'>
                  <h5><FontAwesomeIcon  className='icon' icon={faEnvelope} size="2x" style={{ margin: '0 45px',color:'red' }} />  pavitrasurya.m20@iiits.in</h5>
                  <h5><FontAwesomeIcon  className='icon' icon={faPhone} size="2x" style={{ margin: '0 35px' ,color:'green'}} />+919014176709</h5> 
              </div>
              <div className='btn'>
                    <input type="text" placeholder='enter message'/>
                    <button style={{marginTop : '-20%'}}>Submit</button>
                    
              </div>

              <div className='part2'>
                <div className='trail'>
                    <a href='http://localhost:3000/#' alt='home'>Home</a>
                    <a alt='privacy' >privacy</a>
                    <a alt='policy' >policy</a>
                    <a alt='contact'>Contact</a>
                </div>
                <div className='icons'>
                    <a href='https://github.com/SuryaMopidevi' alt='gitHub'><FontAwesomeIcon className='icon' icon={faGithub} size="2x" style={{ margin: '0 10px',color:'white' }} /></a>
                    <a href='https://www.instagram.com/mopidevi_surya_/?utm_source=qr&igsh=NHk0eXY4OWdqaXNw' alt='instagram'><FontAwesomeIcon  className='icon' icon={faInstagram} size="2x" style={{ margin: '0 10px',color:'pink' }} /></a>
                    <a href='https://www.linkedin.com/in/pavitra-surya-mopidevi-9792ab249/' alt='linkedIn'><FontAwesomeIcon className='icon' icon={faLinkedin} size="2x" style={{ margin: '0 10px',color:'white' }} /></a>
                </div>
              </div>
          </div>
            <p>&copy; 2024  Surya. All Rights Reserved.</p>
        </footer>
      </div>
  )
}
