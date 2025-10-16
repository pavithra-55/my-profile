import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import './css/DarkLightToggle.css';

const DarkLightToggle = ({ onClick }) => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === 'light';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "dark");
        }
    },[darkMode])
    const handleToggle = () => {
        setDarkMode(!darkMode);
        // document.body.classList.toggle("body-light", !darkMode);
        if (onClick) onClick();
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
                    label={darkMode ? 'Dark Mode' : 'Light Mode'}
                    
                />  
            </Form>
        </>
    );
}
export default DarkLightToggle;