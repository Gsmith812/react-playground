import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    }

    state = {
        currentSectionIndex: null
    }

    handleClick = (index) => {
        this.setState({
            currentSectionIndex: index
        })
    }

    renderContent(index) {
        return <p>{this.props.sections[index].content}</p>
    }

    renderListButtons() {
        const listButtons = this.props.sections.map((item, index) => (
            <li key={index}>
                <button key={index} onClick={() => this.handleClick(index)}>
                    {item.title}
                </button>
        {this.state.currentSectionIndex === index ? this.renderContent(index) : null}
            </li>
        ))
        return listButtons
    }

    render() {
        return (
            <ul>
               {this.renderListButtons()} 
            </ul>
        )
    }
}

export default Accordion;