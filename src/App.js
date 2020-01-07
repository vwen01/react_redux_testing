import React, {Component} from 'react';
import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";
import './App.scss';
import SharedButton from "./components/button/button";
import ListItem from "./components/listItem/listItem";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from './actions/creators'

const tempArr = [{
    fName: 'joe',
    lName: 'bloggs',
    age: 24,
    onlineStatus: true,
    email: "email@email.com"
}];

class App extends Component {
    constructor(props) {
        super(props);
        this.fetch = this.fetch.bind(this);
    }

    fetch() {
        this.props.fetchPosts();
    }

    render() {

        const {posts} = this.props;
        console.log(this.props);
        const configButton = {
            buttonText: 'Get Posts',
            emitEvent: this.fetch
        };

        return (
            <div className="App">
                <Header/>
                <section className="main">
                    <Headline header="Posts" desc="Click to Render" tempArr={tempArr}/>
                    <SharedButton {...configButton}/>
                    {posts.length > 0 &&
                    <div>
                        {posts.map((post, index) => {
                            const { title, body } = post;
                            const configListItem = {
                                title,
                                desc: body
                            };
                            return (
                                <ListItem key={index} {...configListItem} />
                            )
                        })}
                    </div>
                    }
                </section>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }

};

const mapDispatchToProps = dispatch=> {
    return {
        fetchPosts: bindActionCreators(fetchPosts, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
