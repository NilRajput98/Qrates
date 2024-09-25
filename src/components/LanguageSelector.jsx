import React, { useState } from 'react';

const LanguageSelector = () => {
    const [language, setLanguage] = useState('English');

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <div className="flex flex-col items-center ">
            
            <select
                id="language-select"
                value={language}
                onChange={handleChange}
                className="p-3 border-2 border-white w-full bg-black text-white"
            >
                <option value="English">English</option>
                <option value="Chinese">Chinese</option>
            </select>
            
        </div>
    );
};

export default LanguageSelector;
