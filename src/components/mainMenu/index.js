import React from 'react';
import './index.scss';


class MainMenu extends React.Component {
  onMenuItemClick = (e, item, index) => {
    if (this.props.onMenuItemClick) {
      return this.props.onMenuItemClick(e, item, index)
    }
    return true
    
  }

  render() {
    return (
      <ul className="by-menu">
        {this.props.items.map((item, i) => 
          <li className="by-menu-item" key={i} >
            <a href={this.props.items[i].title} onClick={(e)=>{ return this.onMenuItemClick(e, item, i)}}>
              <span>{this.props.items[i].title}</span>
            </a>
          </li>
        )}
      </ul>
    )
  }
}

// MainMenu.propTypes = {
//   items: React.PropTypes.object
// };

export default MainMenu;
