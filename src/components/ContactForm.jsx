
const ContactForm = () => {
  return (
    <div>
      <form name='contactForm' action='' id='contactForm' novalidate>
        <div class='row'>
          <div class='input50'>
            <input type='text' name='fname' placeholder='First name' />
          </div>
          <div class='input50'>
            <input type='text' name='lname' placeholder='Last name' />
          </div>
        </div>
        <div class='row'>
          <div class='input50'>
            <input type='email' name='email' placeholder='Email' />
          </div>
          <div class='input50'>
            <input type='text' name='subject' placeholder='Subject Title' />
          </div>
        </div>
        <div class='row'>
          <div class='input100'>
            <textarea
              name='message'
              placeholder='Type in your message here ...'
            ></textarea>
          </div>
        </div>
        <div class='row'>
          <div class='input100'>
            <input type='submit' class='btn' value='Send Message...' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
