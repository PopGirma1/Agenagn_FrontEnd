import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
// ReactDOM.render(<App/>, document.getElementById('root'));

const sampleItems = [
    {
        name: 'TV',
        id: 876234812
    },
    {
        name: 'TV',
        id: 876234813
    },


];

class ShoppingList extends React.Component {
    constructor(props) {
        const { items } = props;
        super(props);
        this.state = { items };
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(id) {
        // Write your code here

        let filteredArray = this.state.items.filter(item => item.id !== id);

       this.setState({items: filteredArray});

    }

    render() {
        return(
            <ul>
                { this.state.items.map( item =>
                    <li key={item.id}> {item.name}
                        <button id="removeBtn"
                                onClick={() => this.removeItem(item.id)}
                                type="button" >Remove</button>
                    </li>
                )}
            </ul>
        );
    }
}

document.body.innerHTML = "<div id='root'> </div>";
const rootElement = document.getElementById( "root" );
ReactDOM.render(<ShoppingList items = { sampleItems } />, rootElement);
document.getElementById("removeBtn").click();
setTimeout(() => console.log(rootElement.innerHTML));