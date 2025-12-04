import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Resume from './components/resume/Resume';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import useLocalStorage from 'use-local-storage'
import Education from './components/Education/Education';


function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <div className="app" data-theme={theme}>
            <Sidebar theme={theme} switchTheme={switchTheme} />
            <main className='main'>
                <Home />
                <About />
                <Skills />
                <Education />
                <Resume />
                <Project />
                {/* <Testimonials /> */}
                <Contact theme={theme} />
            </main>
        </div>
    );
}

export default App;
