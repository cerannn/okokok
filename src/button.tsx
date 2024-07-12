import React from 'react';
import Button from './button';
import './App.css';

const App: React.FC = () => {
    const handleClick = () => {
        alert('Butona tıkladınız!');
    };

    return (
        <div>
            <h1>React ile Basit Buton</h1>
            <Button label="Tıkla" onClick={handleClick} className="my-button" />
        </div>
    );
};

export default App;
