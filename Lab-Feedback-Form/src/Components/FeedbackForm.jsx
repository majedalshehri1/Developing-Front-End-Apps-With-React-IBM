import { useState } from "react";
import "./FeedbackForm.css"; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  // Define a handleChange function to update the form data state as users input their information.
  // Create this after you have initialized variables with useState hook.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  // 1: Implement the form submission functionality by defining a handleSubmit function. This function should take an event parameter and prevent the default form submission.
  // 2: Then, create a variable named confirmationMessage to capture user details.
  // 3: Next, create another variable, isConfirmed, to confirm whether the user's details are correct.
  // 4: If confirmed, log the form data to the console, display a thank you message to the user using the alert box, and clear the form fields by resetting the form data state.
  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
    `;
    const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
    if (isConfirmed) {
      console.log('Submitting feedback:', formData);
      setFormData({
        name: '',
        email: '',
        feedback: ''
      });
      alert('Thank you for your valuable feedback!');
    }
  };

  return (
    <>
      <nav>Tell Us What You Think</nav>
      <form className="feedback-form">
        <h2>Wed Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>

        {/* input form */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};
export default FeedbackForm;
