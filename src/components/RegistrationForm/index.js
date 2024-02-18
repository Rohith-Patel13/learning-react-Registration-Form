import {useState} from 'react'
import './index.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const RegistrationForm = ({setIsRegisterFormVisible}) => {
  const [formData, setFormData] = useState({firstName: '', lastName: ''})
  const [emptyFirst, setEmptyFirst] = useState(false)
  const [emptyLast, setEmptyLast] = useState(false)

  const eventHandler = event => {
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
  }

  const eventHandlerErrorFirst = () => {
    if (formData.firstName === '') {
      setEmptyFirst(true)
    } else {
      setEmptyFirst(false)
    }
  }

  const eventHandlerErrorLast = () => {
    if (formData.lastName === '') {
      setEmptyLast(true)
    } else {
      setEmptyLast(false)
    }
  }

  const submitBtnClicked = () => {
    if (formData.firstName === '' && formData.lastName === '') {
      setEmptyFirst(true)
      setEmptyLast(true)
    }
    if (formData.firstName === '') {
      setEmptyFirst(true)
    }
    if (formData.lastName === '') {
      setEmptyLast(true)
    }
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
          onChange={eventHandler}
          onBlur={eventHandlerErrorFirst}
        />
        {emptyFirst && <p className="errorText">Required</p>}
      </div>

      <div className="inputContainer mt-3">
        <label className="form-label labelName" htmlFor="lastId">
          LAST NAME
        </label>
        <input
          className="form-control"
          name="lastName"
          id="lastId"
          onChange={eventHandler}
          onBlur={eventHandlerErrorLast}
        />
        {emptyLast && <p className="errorText">Required</p>}
      </div>

      <button
        type="button"
        className="btn btn-danger mt-3"
        onClick={submitBtnClicked}
      >
        Submit
      </button>
    </form>
  )
}

export default RegistrationForm
