import React from "react";
import {Component} from "react";
import './About.css'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
    }
    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
    }
    handleClick() {
        this.setState(state => ({
            count: state.count + 1,
        }));
    }
    render() {
        return (
            <div>
                <div className={'mainSection'}>
                    <div>

                        <div>
                            <img src={window.location.origin + '/asset/Img/papa.jpg'} width={'400px'} height={'600px'} />
                            <label> Girmay Tadese</label>
                        </div>

                    </div>
                    <div>

                        <div>
                            <img src={window.location.origin + '/asset/Img/kalab.jpg'} width={'400px'} height={'600px'} />
                            <label> Kalab Amare</label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={window.location.origin + '/asset/Img/cmd.jpg'} width={'400px'} height={'600px'} />
                            <label>Deselagn Mihret </label>
                        </div>
                    </div>
                    <div>
                        <p>You clicked {this.state.count} times</p>
                        <button onClick={this.handleClick}>
                            Click me
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}

export default About
