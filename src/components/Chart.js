import React from 'react';
import {Line,Pie,Polar} from 'react-chartjs-2';
import axios from 'axios';
import './Chart.css'

class Chart extends React.Component {
    constructor(){
        super();
        this.state = {
          lineChart:{},
          pie:{},
          polar:{}
        }
      }
    componentDidMount() {
        var ctx = document.getElementById('line').getContext("2d")
        var gradient = ctx.createLinearGradient(255, 255, 255, 0)
        gradient.addColorStop(0, '#FFFFFF')
        gradient.addColorStop(1, 'rgba(120, 151, 100, 0.65)')
        let linedata = [];
        let piePolarData = [];
        axios.get(`https://ecdba7fe-ec10-4d90-8d0e-80f8364c7624.mock.pstmn.io/takehometest/frontend/web/dashboard`)
            .then(res => {
            const users = res.data.data.orders;
            const conversionAndUser = res.data.data.user_category
            const pieData = [conversionAndUser.conservative, conversionAndUser.moderate,conversionAndUser.risk_taker,conversionAndUser.risk_averse]
            users.forEach(element => {
                linedata.push(element.conversion_revenue);
            });
            pieData.forEach(element => {
                piePolarData.push(element);
            });
            this.setState({
                lineChart : {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [
                      {
                        fill: true,
                        lineTension: 0.5,
                        backgroundColor: gradient,
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        data: linedata
                      }
                    ]
                  },
                pie : {
                    labels: ['#Item1', '#Item2', '#Item3'],
                    datasets: [
                      {
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: [
                            '#E4EAEB',
                            '#EBA45E',
                            '#5C8F94',
                            '#725E9C'
                          ],
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        data: piePolarData
                      }
                    ]
                  },
                  polar : {
                    labels: ['#Cat1', '#Cat2', '#Cat3'],
                    datasets: [
                      {
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: [
                            '#E4EAEB',
                            '#EBA45E',
                            '#5C8F94',
                            '#725E9C'
                        ],
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        data: piePolarData
                      }
                    ]
                  }
             });
            })
    }
     
  render() {
    return (
      <div className="row">
          <div className="chart pie-chart">
            <Pie
            data={this.state.pie}
            options={{
                title:{
                display:true,
                text:'Conversion',
                fontSize:20
                },
                responsive: true,
                maintainAspectRatio: true,
                legend:{
                display:true,
                position:'bottom',
                labels: {
                    usePointStyle:true
                    }
                },
            }}
            />
          </div>
          <div className="chart polar-chart">
            <Polar
            data={this.state.polar}
            options={{
                title:{
                display:true,
                text:'Users',
                fontSize:20
                },
                responsive: true,
                maintainAspectRatio: true,
                legend:{
                display:true,
                position:'bottom',
                labels: {
                    usePointStyle:true
                }
                }
            }}
            />
          </div>
          <div className="chart line-chart">
            <Line
            data={this.state.lineChart}
            id="line"
            options={{
                title:{
                display:true,
                text:'Revenue',
                fontSize:20
                },
                legend:{
                    display:false,
                },
                responsive: true,
                maintainAspectRatio: true,
            }}
            />
          </div>
      </div>
    );
  }
}

export default Chart;