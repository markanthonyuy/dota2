import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import App from './components/App';

ReactDOM.render(<BrowserRouter basename="/dota2-mmr-leaderboard"><App /></BrowserRouter>, document.getElementById('root'));
