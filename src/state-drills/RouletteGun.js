import React from 'react';

class RouletteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheChamber: false,
        text: ''
    }

    static defaultProps = {
        bulletInChamber: 8
    }

    handleClick = () => {
        this.setState({
            spinningTheChamber: true,
            text: 'spinning the chamber and pulling the trigger! ...'
        })
        
        const timeout = setTimeout(() => {
            const randomNum = Math.ceil(Math.random() * 8);
            this.setState({
                chamber: randomNum
            })
            if(this.props.bulletInChamber === this.state.chamber) {
                this.setState({
                    text : 'BANG!!!!'
                })
            }
            else {
                this.setState({
                    text : "you're safe!"
                })
            }
            this.componentWillUnmount(timeout)

        }, 2000);
    }
    
    componentWillUnmount(timeout) {
        clearTimeout(timeout)
        this.setState({
            spinningTheChamber: false
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.text}</p>
                <button onClick={this.handleClick}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;