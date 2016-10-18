import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SelectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderBookList() {
        return this.props.books.map(book => {
            return (
                <li onClick={() => this.props.selectBook(book)}
                    key={book.title} 
                    className="list-group-item">
                    {book.title}
                </li>
            );
        })
    }
    render() {
        return(
            <ul className="list-group col-sm-4">
                {this.renderBookList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook: SelectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);