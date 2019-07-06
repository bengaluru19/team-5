import React, { Component } from 'react'
import {connect} from "react-redux"
import {getCurrentProfile} from "../../Store/Actions/authAction"
import PropTypes from "prop-types"
class UserDashboard extends Component {
    componentDidMount(){
        const uid = localStorage.getItem("uid")
        this.props.getCurrentProfile(uid)
    }
    render() {
        return (
            <div>
                UserDashboard
            </div>
        )
    }
}
UserDashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired
}

export default connect(null,{getCurrentProfile})(UserDashboard);