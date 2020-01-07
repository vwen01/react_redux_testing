import React from 'react';
import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";
import './App.scss';

function App() {
    return (
        <div className="App">
            <Header/>
            <section className="main">
                <Headline header = "Posts" desc = "Click to Render" />
            </section>
        </div>
    );
}

export default App;
