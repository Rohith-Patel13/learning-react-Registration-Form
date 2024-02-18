// Write your JS code here

// import RegisterSuccess from '../RegisterSuccess/index'
import './index.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const RegistrationForm = ({setIsRegisterFormVisible}) => {
  const eventHandler = event => {
    console.log(event.target.value)
  }

  const submitBtnClicked = () => {
    setIsRegisterFormVisible(false)
  }

  return (
    <form className="formInputBg">
      <div className="inputContainer">
        <label
          className="form-label labelName"
          htmlFor="nameId"
          name="firstName"
        >
          FIRST NAME
        </label>
        <input className="form-control" id="nameId" onBlur={eventHandler} />
      </div>

      <div className="inputContainer mt-3">
        <label
          className="form-label labelName"
          htmlFor="lastId"
          name="lastName"
        >
          LAST NAME
        </label>
        <input className="form-control" id="lastId" />
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
