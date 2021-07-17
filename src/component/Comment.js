import React, {Component} from 'react';
import   '../Styles/comment.css';
 export default class CommentBox extends React.Component {
    constructor() {
        super();

        this.state = {
            showComments: false,
            comments: [
                {id: 1, author: "landiggity", body: "This is my first comment on this forum so don't be a dick"},
                {id: 2, author: "scarlett-jo", body: "That's a mighty fine comment you've got there my good looking fellow..."},
                {id: 3, author: "rosco", body: "What is the meaning of all of this 'React' mumbo-jumbo?"}
            ]
        };
    }

    render () {
        const comments = this._getComments();
        let commentNodes;
        let buttonText = 'Show Comments';

        if (this.state.showComments) {
            buttonText = 'Hide Comments';
            commentNodes = <div className="comment-list">{comments}</div>;
        }

        return(
            <div className={'container'}>
                <div className="comment-box">
                    <h2>Join the Discussion!</h2>
                    <CommentForm addComment={this._addComment.bind(this)}/>
                    <div id="comment-reveal">
                        <button id="revealButton" onClick={this._handleClick.bind(this)}>
                            {buttonText}
                        </button>
                    </div>
                    <h3>Comments</h3>
                    <h4 className="comment-count">
                        {this._getCommentsTitle(comments.length)}
                    </h4>
                    {commentNodes}
                </div>
            </div>
        );
    } // end render

    _addComment(author, body) {
        const comment = {
            id: this.state.comments.length + 1,
            author,
            body
        };
        this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
    }

    _handleClick() {
        this.setState({
            showComments: !this.state.showComments
        });
    }

    _getComments() {
        return this.state.comments.map((comment) => {
            return (
                <CommentBoxe
                    author={comment.author}
                    body={comment.body}
                    key={comment.id} />
            );
        });
    }
    /*deleteComment(id){
        this.setState({comments})
    }
*/
    _getCommentsTitle(commentCount) {
        if (commentCount === 0) {
            return 'No comments yet';
        } else if (commentCount === 1) {
            return "1 comment";
        } else {
            return `${commentCount} comments`;
        }
    }
} // end CommentBox component

class CommentForm extends React.Component {
    render() {
        return (
            <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                <div className="comment-form-fields">
                    <input placeholder="Name" required ref={(input) => this._author = input} className="nameInput"></input><br />
                    <textarea placeholder="CommentBox" rows="4" required ref={(textarea) => this._body = textarea}></textarea>
                </div>
                <div className="comment-form-actions">
                    <button type="submit">Post CommentBox</button>
                </div>
            </form>
        );
    } // end render

    _handleSubmit(event) {
        event.preventDefault();   // prevents page from reloading on submit
        let author = this._author;
        let body = this._body;
        this.props.addComment(author.value, body.value);
    }
} // end CommentForm component

 class CommentBoxe extends React.Component {
    render () {
        return(
            <div className="comment">
                <p className="comment-header">{this.props.author}</p>
                <p className="comment-body">- {this.props.body}</p>
                <div className="comment-footer">
                    <a href="#" className="comment-footer-delete" onClick={()=>this._deleteComment(this.props.key)}>Delete CommentBox</a>
                </div>
            </div>
        );
    }
    _deleteComment(key) {


        alert("-- DELETE CommentBox Functionality COMMING SOON...");
    }
}

