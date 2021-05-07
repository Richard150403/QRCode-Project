import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const Appwork: React.FC = () => { //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.
  const QRCode = require('qrcode.react');


  //declares the state variables using the usestate hook by react
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('');
  const [mail, setMail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [Url, setUrl] = useState('');


//function retrieves the value of the input 
  const ShowMessage = (event: any) => {
    setMessage(event.target.value);
  }

  const ShowNumber = (event: any) => {
    setNumber(event.target.value);
  }

  const ShowMail = (event: any) => {
    setMail(event.target.value);
  }
  
  const ShowSubject = (event: any) => {
    setSubject(event.target.value);
  }
  
  const ShowBody = (event: any) => {
    setBody(event.target.value);
  }

  const ShowURL = (event: any) => {
    setUrl(event.target.value);
  }

  return (
    <div className="columns has-background-black-ter">
      <div className="column has-background-danger-dark">
        <div className="field">
          <QRCode value={`SMS:${number}:${message}`} size={256} /> 
          <div className="control">
            <label className="label">Phone Number</label>
          </div>
          <input className="input" type="text" placeholder="Phone Number" onInput={ShowNumber} />{/*Changes the QRcode based on the input in the phone number text box */}
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <input className="input" type="text" placeholder="Message" onInput={ShowMessage} />{/*Changes the QRcode based on the input in the message text box */}
          </div>
        </div>

      </div>
      <div className="column has-background-success-dark" >
        <div className="field">
          <QRCode value={`mailto:${mail} Subject=${subject} &body=${body}.`} size={256} />
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="text" placeholder="Email" onInput={ShowMail} />{/*Changes the QRcode based on the input in the Email text box */}
          </div>
        </div>

        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <input className="input" type="text" placeholder="Subject" onInput={ShowSubject} />{/*Changes the QRcode based on the input in the subject text box */}
          </div>
        </div>

        <div className="field">
          <label className="label">Body</label>
          <div className="control">
            <input className="input" type="text" placeholder="Body" onInput={ShowBody} />{/*Changes the QRcode based on the input in the body text box */}
          </div>
        </div>

      </div>
      <div className="column has-background-info-dark">
        <div className="field">
        <QRCode value={`URL = ${Url}`} size={256}/>
          <label className="label">URL</label>
          <div className="control">
            <input className="input" type="text" placeholder="URL" onInput={ShowURL} />{/*Changes the QRcode based on the input in the URL text box */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Appwork;