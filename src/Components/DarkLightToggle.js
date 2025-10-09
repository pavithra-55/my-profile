import React, { useState } from "react";
import { Form } from "react-bootstrap";
import './css/DarkLightToggle.css';

const DarkLightToggle = ({ onClick }) => {
    const [darkMode, setDarkMode] = useState(false);
    const handleToggle = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("body-light", !darkMode);
    }
    return ( 
        <>
            <Form>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    checked={darkMode}
                    onChange={handleToggle}
                    className="theme-switch"
                    label={darkMode?'Dark Mode':'Light Mode'}
                />  
            </Form>
        </>
    );
}
export default DarkLightToggle;