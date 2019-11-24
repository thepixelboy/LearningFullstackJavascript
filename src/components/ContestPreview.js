import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ContestPreview extends Component {
    handleClick = () => {
        console.log(this.props.contestName);
    }
    render() {
        return (
            <div className="link ContestPreview">
                <div className="category-name" onClick={this.handleClick}>
                    {this.props.categoryName}
                </div>
                <div className="contest-name">
                    {this.props.contestName}
                </div>
            </div>
        );
    }
}

ContestPreview.propTypes = {
    categoryName: PropTypes.string.isRequired,
    contestName: PropTypes.string.isRequired,
}

export default ContestPreview;