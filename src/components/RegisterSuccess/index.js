import './index.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const RegisterSuccess = ({setIsRegisterFormVisible}) => {
  const submitBtnClicked = () => {
    setIsRegisterFormVisible(true)
  }

  return (
    <div className="successBg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button
        className="btn btn-danger"
        type="button"
        onClick={submitBtnClicked}
      >
        Submit Another Response
      </button>
    </div>
  )
}

export default RegisterSuccess
