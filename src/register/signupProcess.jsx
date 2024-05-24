import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Menggunakan useNavigate alih-alih useHistory
import config from './config'; // Pastikan path ini sesuai dengan struktur proyek Anda

const SignupProcess = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Menggunakan useNavigate alih-alih useHistory

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await fetch('signup.php', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      const data = await response.json();

      if (data.success) {
        navigate('/setProfil'); // Menggunakan navigate alih-alih history.push
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Failed to sign up');
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default SignupProcess;
