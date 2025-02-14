import React from 'react';

const exampleText = "Don't worry, be happy!"; // Fixed unescaped ' character

const ExampleComponent = () => {
    return (
        <div>
            {exampleText}
        </div>
    );
};

export default ExampleComponent;
