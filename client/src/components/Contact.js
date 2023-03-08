import React,{useState} from 'react'


const Contact = (props) => {
  const [firstName,setFirstName] = useState('');
  const [email, setEmail] = useState ('');
  const [message, setMessage] = useState ('');

  const contactForm = (e) => {
    e.preventDefault()
        const newConnect = {firstName, email, message};
        console.log('new connect created', {newConnect})
      setFirstName('')
      setEmail('')
      setMessage('')
      return (
        alert('Thanks for reaching out')
      )
    }


  return (
    <div>
      <form onSubmit={contactForm} >
        <h1>Want to connect?</h1>
        <h2>Send me an email!</h2>

        <div>
          <label>First Name:</label>
          <input type='text' onChange={ (e) => setFirstName(e.target.value) } />
        </div>
        <div>
          <label>Email</label>
          <input type='email' onChange={ (e) => setEmail(e.target.value) } />
        </div>
        <div>
          <label>Message</label>
          <input type='text' onChange = { (e) => setMessage(e.target.value)} />
        </div>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Contact