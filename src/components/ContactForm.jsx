const ContactForm = () => {
  return (
    <div>
      <form name='contactForm' action='' id='contactForm' noValidate>
        <div className='row'>
          <div className='input50'>
            <input type='text' name='fname' placeholder='First name' />
          </div>
          <div className='input50'>
            <input type='text' name='lname' placeholder='Last name' />
          </div>
        </div>
        <div className='row'>
          <div className='input50'>
            <input type='email' name='email' placeholder='Email' />
          </div>
          <div className='input50'>
            <input type='text' name='subject' placeholder='Subject Title' />
          </div>
        </div>
        <div className='row'>
          <div className='input100'>
            <textarea
              name='message'
              placeholder='Type in your message here ...'
            ></textarea>
          </div>
        </div>
        <div className='row'>
          <div className='input100'>
            <input type='submit' className='btn' value='Send Message...' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
