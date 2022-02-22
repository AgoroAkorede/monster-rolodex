import React, { Component } from 'react';

import { CardList } from './card-list/card-list.component';

import { SearchBox } from './search-box/search-box.component';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        };

        // this.handleChange=this.handleChange.bind(this)
    }

    async componentDidMount() {
       try{ const res = await fetch('https://jsonplaceholder.typicode.com/users');

            const data = await res.json();
           console.log(data);  
           this.setState({ monsters: data})
        // fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
           //     .then(users => this.setState({ monsters: users })
        } catch(err){
            console.error(err)
        }

    }


    handleChange = e => {
        this.setState({ searchField: e.target.value });
        const filteredMonsters = this.state.monsters.filter(monster =>
            monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
           
        
    }

    render() {
        const {monsters} = this.state;
        
        return( 
            <div className='App'>
                <h1>Monsters Rolodex</h1>
                <SearchBox 
                    placeholder='search monsters'
                    handleChange={this.handleChange}
                />

                <CardList monsters={monsters}/>
            
            </div>
        )
    }
}

export default App;