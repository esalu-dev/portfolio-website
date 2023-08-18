import { MainHeader } from "./components/MainHeader"
import { FirstSection } from "./components/FirstSection"
import { AboutMe } from "./components/AboutMe"
import { useState } from "react"
import ThemeContext from "./context/ThemeContext"
import { Projects } from "./components/Project"
import { Skills } from "./components/Skills"

function App() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
      <main className={theme}>
        <div className="font-Nunito w-full bg-gradient-to-br from-emerald-100 to-light-green dark:from-navy-blue-800 dark:to-aqua-green-800">
          <MainHeader/>
          <FirstSection/>
          <AboutMe/>
          <Projects/>
          <Skills/>
        </div>
      </main>
    </ThemeContext.Provider>
  )
}

export default App
