import React, { useState } from 'react';

const SetProfilProcess = () => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('laki-laki');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:3001/setProfil', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ age, gender }),
        });

        if (response.ok) {
            alert('Berhasil');
            window.location.href = '/login'; // Ganti dengan rute yang sesuai
        } else {
            alert('Data gagal dimasukan');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Age:
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Gender:
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="laki-laki">Laki-laki</option>
                        <option value="perempuan">Perempuan</option>
                    </select>
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default SetProfilProcess;
