import React from 'react'

function Button({ text, className }) {
    return (
        <button className={`bg-green-600 text-white py-1 px-4 rounded-lg ${className}`}>
            {text}
        </button>
    )
}

export default Button