import React from 'react';
import './index.css';
import Button from '../button'

class MediaCard extends React.Component {

    render () {
        let tags = this.props.tags
        let header = this.props.header
        let main = this.props.main
        let footer = this.props.footer
        return(
            <aside className="by-wrapper-media-card clearfix">
                <aside className="by-media-card-tags">
                {tags.map((tag, i) =>
                    <aside className="by-media-card-tag">
                        <Button key={i} text={tag} />
                    </aside>
                )}
                </aside>
                {header !== undefined? <p className="by-media-card-header">{header}</p>: null}
                <hr className="by-media-card-line"></hr>
                {main !== undefined? 
                    main.map((obj, i) => 
                        <aside className="by-media-card-main">
                            <p>{obj.title}</p>
                            <p>{obj.text}</p>
                        </aside>
                    )
                    : null
                }
                <hr className="by-media-card-line"></hr>
                {footer !== undefined? 
                    <aside className="by-media-card-footer">
                    {footer.map((obj, i) => 
                        <p key={i}>{obj}</p> 
                    )}
                    </aside>
                    : null
                }
                
            </aside>
        )
    }
}

export default MediaCard;