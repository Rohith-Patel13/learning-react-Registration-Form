import {useState} from 'react'
import './index.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const RegistrationForm = ({setIsRegisterFormVisible}) => {
  const [formData, setFormData] = useState({firstName: '', lastName: ''})

  const eventHandler = event => {
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
  }

  const submitBtnClicked = () => {
    if (formData.firstName !== '' && formData.lastName !== '')
      setIsRegisterFormVisible(false)
  }

  return (
    <form className="formInputBg">
      <div className="inputContainer">
        <label className="form-label labelName" htmlFor="nameId">
          FIRST NAME
        </label>
        <input
          className="form-control"
          name="firstName"
          id="nameId"
          onBlur={eventHandler}
        />
      </div>

      <div className="inputContainer mt-3">
        <label className="form-label labelName" htmlFor="lastId">
          LAST NAME
        </label>
        <input
          className="form-control"
          name="lastName"
          id="lastId"
          onBlur={eventHandler}
        />
      </div>

      <div className="submitBtn">
        <button
          type="button"
          className="btn btn-danger mt-3"
          onClick={submitBtnClicked}
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default RegistrationForm
