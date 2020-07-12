import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types'


const HomePage = ({ isAuthenticate }) => {
    return (
        <div>
            <h1>Home Page</h1>
            {isAuthenticate ? <input type='button' value='logout' /> : <Link to="/login">Login</Link>}
        </div>
    )
}
HomePage.propTypes = {
    isAuthenticate: PropTypes.boolean.isRequired
}

function mapStateToProps(state) {
    return {
        isAuthenticate: !!state.user.token
    }
}
export default connect(mapStateToProps)(HomePage)
