import React from 'react';
import Header from './Header';
import Date from './Datecom';
import Order from './Order';
import Chart from './Chart'

const App = () => {
    return (
        <div className="container">
            <Header />
            <Date />
            <Chart />
            <Order />
        </div>
    )
}

export default App;