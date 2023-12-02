import './App.css'

import { Layout } from '@app/layout'

import {BrowserRouter} from "react-router-dom";


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>      
      </div>
    </>
  )
}

export default App;
