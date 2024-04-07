const ContactForm = () => {
  async function sendContactMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const contactForm = event.currentTarget;
    const formData = new FormData(contactForm);

    const firstname = formData.get("fname");
    const lastname = formData.get("lname");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!firstname || !lastname || !email || !subject || !message) {
      alert("Please fill the entire form to send the message...");
    } else {
      const newContact = {
        firstname,
        lastname,
        email,
        subject,
        message,
      };
      // console.log(newContact);

      const API_URL =
        window.location.hostname === "127.0.0.1" ||
        window.location.hostname === "localhost"
          ? "http://localhost:5000"
          : "https://api.ranckosolutions.com";

      fetch(`${API_URL}/api/v1/contacts`, {
        method: "POST",
        body: JSON.stringify(newContact),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            const contentType = response.headers.get("content-type")!;
            if (contentType.includes("json")) {
              return response
                .json()
                .then((error) => Promise.reject(error.message));
            } else {
              return response.text().then((message) => Promise.reject(message));
            }
          }
        })
        .catch((error) => {
          console.log(error.message);
        });

      contactForm.reset();
      alert(
        `Thanks for your message. You'll be contacted through your email!...`
      );
    }
  }

  return (
    <div>
      <form
        name='contactForm'
        onSubmit={sendContactMessage}
        id='contactForm'
      >
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
