// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// ref: https://react-bootstrap.github.io/components/modal/
// ref: https://react-bootstrap.github.io/components/button/
// ref: https://react-bootstrap.github.io/getting-started/introduction/
// ref: https://create-react-app.dev/

import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const App=()=>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return  (
      <>
          <Button onClick={handleShow}>Toggol Dialog</Button>
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
              Save Changes
          </Button>
          </Modal.Footer>
      </Modal>
    </>
  )

}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

