import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Region from './Region';
import Footer from './Footer';
import MMR from '../mmr';
import '../css/App.css';

const NoMatch = () => {
  return (
    <p className="not-found">Region Not Found!</p>
  )
}

class App extends Component {

  constructor() {
    super();

    this.state = {
      mmr: MMR,
      target: 1,
    };
  }

  render() {
    return (
      <main>
        <Header title="Dota 2 MMR Leaderboard"></Header>
        <Nav />
        <div className="container clearfix">
          <Switch>
            <Route exact path="/" render={(routeProps) => (
                <Region data={this.state.mmr.america} update={this.state.mmr.updated} title="America"></Region>
              )}
            />
            <Route path="/america" render={(routeProps) => (
                <Region data={this.state.mmr.america} update={this.state.mmr.updated} title="America"></Region>
              )}
            />
            <Route path="/europe" render={(routeProps) => (
                <Region data={this.state.mmr.europe} update={this.state.mmr.updated} title="Europe"></Region>
              )}
            />
            <Route path="/sea" render={(routeProps) => (
                <Region data={this.state.mmr.sea} update={this.state.mmr.updated} title="South East Asia"></Region>
              )}
            />
            <Route path="/china" render={(routeProps) => (
                <Region data={this.state.mmr.china} update={this.state.mmr.updated} title="China"></Region>
              )}
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer></Footer>
      </main>
    );
  }
}

export default App;
