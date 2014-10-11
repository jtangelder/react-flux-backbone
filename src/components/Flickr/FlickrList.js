var React = require('react');

module.exports = React.createClass({
    render: function() {
        return <ul className='list-inline'>
            {this.props.photos.map(function(photo) {
                return <li key={photo.cid}>
                    <img className="img-thumbnail" src={photo.get('media').m} />
                </li>
            })}
        </ul>
    }
});
