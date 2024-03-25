import NavBar from "./Components/Navbar/Navbar.tsx";
import './Components/Navbar/NavBarStyle.css'
import TextSection from './Components/TextSection/TextSection.tsx'
import './Components/TextSection/Style.css'
import BackgroundImage from "./Components/BackgroundImage/BackgroundImage.tsx";
import './Components/BackgroundImage/Style.css'
import TabHeading from "./Components/TabHeading/TabHeading.tsx";
import './Components/TabHeading/Styles.css'
import './Components/TabHeadingContent/Styles.css'
import './App.css'
import './Components/TextSection/Style.css'
import React from "react";

const App:React.FunctionComponent = () => {
    return (
        <>
            <header>
                <NavBar/>
            </header>
            <main>
                <section className="landing-page">
                    <div className="landing-page-content">
                        <TextSection/>
                    </div>
                    <div className="landing-graphics">
                        <BackgroundImage/>
                    </div>
                </section>
                <section className="tab-page">
                <TabHeading/>
                </section>
                </main>
        </>
    )
}
export default App

