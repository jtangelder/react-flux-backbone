var React = require('react');


module.exports = React.createClass({
    render: function() {
        if(this.props.FlickrStore.size() === 0) {
            return <p>No results.</p>
        }

        return <ul className='list-inline'>
            {this.props.FlickrStore.map((result)=>
                <li key={result.cid}>
                    <img className="img-thumbnail" src={result.getPhoto()} />
                </li>
            )}
        </ul>
    }
});
