import React,{Component} from 'react';
import axios from 'axios';
import {Pie, Bar, Doughnut} from 'react-chartjs-2';


class HomePage extends Component {
    state = {
    dataSource: {
        datasets: [
            {
                data: [],
                backgroundColor: [
                    '#ffcd56',
                    '#ff6384',
                    '#36a2eb',
                    '#fd6b19',
                    '#92a8d1',
                    '#12a8d1',
                    '#d5f4e6'
                ]
            }
        ],
        labels: []
    }
}

async componentDidMount() {
    const res = await axios.get('http://localhost:8080/budget');
    let tempData = this.state.dataSource;
    for(var i=0; i < res.data.myBudget.length; i++){
             tempData.datasets[0].data[i] = res.data.myBudget[i].budget;
             tempData.labels[i] = res.data.myBudget[i].title;
    }
         
    this.setState({
        dataSource: Object.assign({}, this.state.dataSource, {
            dataSource: tempData
        })
    });
}
    render(){
        return(
        <div className="container center">
        
            <div className="page-area">
    
                <div className="text-box">
                    <h1>Stay on track</h1>
                    <p>
                        Do you know where you are spending your money? If you really stop to track it down,
                        you would get surprised! Proper budget management depends on real data... and this
                        app will help you with that!
                    </p>
                </div>
                <div className="text-box">
                    <h1>Pie Chart</h1>
                        <div>
                            <Pie data={this.state.dataSource} />
                        </div>
                </div>
                <div className="text-box">
                    <h1>Bar Chart</h1>
                        <div>
                            <Bar data={this.state.dataSource} />
                        </div>
                </div>
                <div className="text-box">
                    <h1>Doughnut Chart</h1>
                        <div>
                            <Doughnut data={this.state.dataSource} />
                        </div>
                </div>
        </div>
        </div>
        )
    }
}
export default HomePage;