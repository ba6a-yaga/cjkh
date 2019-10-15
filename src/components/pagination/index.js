import React from 'react';
import './index.css';

class Pagination extends React.Component {

    Repeat(props) {
        let items = []
        for (let i = 0; i < props.num; i++) {
            items.push(props.children(i))
        }
        return <aside className="by-wrapper-pagination">{items}</aside>
    }
      
    render() {
        let count = this.props.count

        return (
            <this.Repeat num={count}>
                {(i) => 
                    this.props.active === i+1?
                        <span key={i} className={`by-pagination-round-active ${this.props.hideNumber ? 'no-number' : ''} `}>
                            {this.props.hideNumber ? undefined:<span className="by-pagination-round-number">{i+1}</span>}
                        </span>
                        :
                        <span key={i} className="by-pagination-round"></span>
                }
            </this.Repeat>
        )
    }
}

export default Pagination;