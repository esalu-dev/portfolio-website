import { MainHeader } from "./components/MainHeader"
import { FirstSection } from "./components/FirstSection"
import { AboutMe } from "./components/AboutMe"
import { useState } from "react"
import ThemeContext from "./context/ThemeContext"

function App() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    // Cambiar el tema en función del estado actual
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
      <main className={theme}>
        <div className="font-Nunito w-full bg-gradient-to-br from-emerald-100 to-light-green dark:from-navy-blue-800 dark:to-aqua-green-800 lg:px-48">
          <MainHeader/>
          <FirstSection/>
          <AboutMe/>
        </div>
      </main>
    </ThemeContext.Provider>
  )
}

export default App
