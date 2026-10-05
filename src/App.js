
import { useState, useContext, createContext } from "react";
import "./App.css";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <ThemeSwitcher />
      </div>
    </ThemeContext.Provider>
  );
}

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="container">

      <div className="theme-icon">
        {theme === "light" ? "☀️" : "🌙"}
      </div>

      <h1>Color Theme Switcher</h1>

      <p className="subtitle">
        Customize your experience with a beautiful theme
      </p>

      <div className="theme-card">

        <div className="preview">

          <div className="preview-circle"></div>

          <div>
            <h2>
              {theme === "light" ? "Light Mode" : "Dark Mode"}
            </h2>

            <p>
              {theme === "light"
                ? "Bright, clean and comfortable"
                : "Elegant, modern and easy on the eyes"}
            </p>
          </div>

        </div>

        <button
          onClick={toggleTheme}
          className="theme-button"
        >
          <span>
            {theme === "light" ? "🌙" : "☀️"}
          </span>

          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>

        <div className="status">
          Current Theme:
          <strong>
            {theme === "light" ? " LIGHT" : " DARK"}
          </strong>
        </div>

      </div>

      <div className="color-palette">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <p className="saved">
        ✓ Your theme preference is saved automatically
      </p>

    </div>
  );
}

export default App;

