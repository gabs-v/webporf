import React,{useState} from 'react'


const Contact = () => {

  const ContactForm = (props) => {
    const [firstName,setFirstName] = useState('');
    const [email, setEmail] = useState ('');
    const [message, setMessage] = useState ('');

    const createForm = (e) =>{
      e.preventDefault() //prevent the refresh 
        const newConnect = {firstName, email, message};
        console.log("Welcome" , firstName)
      setFirstName('')
      setEmail('')
      setMessage('')
    }
  }



  return (
    <div>
      <form onSubmit={ createForm } >
        <h1>Want to connect?</h1>
        <h2>Send me an email!</h2>

        <div>
          <label>First Name:</label>
          <input type='text' onChange={ (e) => setFirstName(e.target.value) } />
        </div>
        <div>
          <label>Email</label>
          <input type='text'  />
        </div>
      </form>
    </div>
  )
}

export default Contact