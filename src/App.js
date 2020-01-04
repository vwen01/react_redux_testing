import React from 'react';
import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";
import './App.scss';

const tempArr = [{
   fName: 'joe',
   lName: 'bloggs',
   age: 24,
   onlineStatus: true,
   email: "email@email.com"
}];

function App() {
    return (
        <div className="App">
            <Header/>
            <section className="main">
                <Headline header = "Posts" desc = "Click to Render" tempArr = {tempArr} />
            </section>
        </div>
    );
}

export default App;
