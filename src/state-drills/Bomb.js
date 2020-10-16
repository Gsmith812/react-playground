import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0,
        ticker: 'tick'
    }
    

    componentDidMount() {
        this.interval = setInterval(() => {
            const newCount = this.state.count + 1
            if(this.state.count >= 8) {
                this.componentWillUnmount()
            }
            else if(this.state.count % 2 === 0) {
                this.setState({
                    ticker : 'tock'
                })
            }
            
            else {
                this.setState({
                    ticker : 'tick'
                })
            }
            this.setState({
                count: newCount
            })
        }, 1000);
    }

    componentWillUnmount() {
        this.setState({
            ticker : 'BOOM!'
        })
        clearInterval(this.interval);
    }
    render() {
        return (
            <div>
                <p>{this.state.ticker}</p>
            </div>
        )
    }
}

export default Bomb;