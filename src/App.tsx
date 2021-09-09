import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button'

function App() {
  return (
    <div className="App">
      <Button
        btnType={ButtonType.Primary}
      // disabled
      >
        Butotn
      </Button>
      <Button
        btnType={ButtonType.Link}
        href={'javascript;'}
      >
        Link Butotn
      </Button>
    </div>
  );
}

export default App;
