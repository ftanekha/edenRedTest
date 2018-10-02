import React from 'react';
import getBooks from './getBooks';
import Illustrations from './illustrations';

export default class App extends React.Component {
    state = {
        books: [],
        loading: false
    }

    componentWillMount() {
        this.setState({loading: true});
        getBooks().then(books => this.setState({books, loading: false}))
    }

    render() {
        return this.state.loading ? 
        (<a className='button is-loading'>Loading</a>)
        : (<Illustrations books={this.state.books}/>)
    }
}