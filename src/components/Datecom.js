import React from 'react';
import './Date.css';

class Datecom extends React.Component {
    constructor(props){
        super(props)
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const today = new Date(),
        date = today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' +today.getFullYear();
        this.state = {
            currentDate: date
        }
    }
    render(){
        return (
            <div className="background">
                <div className="text">
                    {this.state.currentDate}
                </div>
            </div>
        )
    }
}

export default Datecom;