/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-color": "var(--primary-color)",
                "secondary-color": "var(--secondary-color)",
                "tertiary-color": "var(--tertiary-color)",
                "correct-color": "var(--correct-color)",
                "incorrect-color": "var(--incorrect-color)",
                "primary-text": "var(--primary-text)",
            },
            height: {
                "header-height": "var(--header-height)",
            },
        },
    },
    plugins: [],
};
