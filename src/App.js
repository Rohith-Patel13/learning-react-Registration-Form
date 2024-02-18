import {useState} from 'react'
import RegistrationForm from './components/RegistrationForm'
import RegisterSuccess from './components/RegisterSuccess'

import './App.css'

const App = () => {
  const [isRegisterFormVisible, setIsRegisterFormVisible] = useState(true)
  return (
    <div className="bg">
      <h1 className="heading">Registration</h1>
      <div className="formBg">
        {isRegisterFormVisible ? (
          <RegistrationForm
            setIsRegisterFormVisible={setIsRegisterFormVisible}
          />
        ) : (
          <RegisterSuccess
            setIsRegisterFormVisible={setIsRegisterFormVisible}
          />
        )}
      </div>
    </div>
  )
}

export default App
