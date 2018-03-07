import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';
import registerServiceWorker from './registerServiceWorker';

var toDos = ['Write my LinkedIn bio', 'Suffer', 'Eat 30 burritos in one sitting']


ReactDOM.render(<MyList theList={toDos} />, document.getElementById('root'));
registerServiceWorker();
