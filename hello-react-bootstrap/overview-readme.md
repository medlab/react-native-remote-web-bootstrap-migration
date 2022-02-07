
```bash
npx create-react-app .
# ref: https://react-bootstrap.github.io/getting-started/introduction
npm install react-bootstrap bootstrap

cat > src/index.js <<-'EOF'

// ref: https://create-react-app.dev/
// ref: https://react-bootstrap.github.io/components/button/
// ref: https://react-bootstrap.github.io/components/modal/
// ref: https://react-bootstrap.github.io/getting-started/introduction/

import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'react-bootstrap/Button';
import Model from 'react-bootstrap/Modal';

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

EOF

npm start


# for publish
#npm install -g serve
#serve -s build

```