import React from 'react';
import { connect } from 'react-redux';
import AdminPage from './AdminPage';
import GlobalActions from '../../Services/GlobalActions';

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        goToDestination: (navigator, destination) => {
            dispatch(GlobalActions.goToDestination(navigator, destination));
        }
    }
}

const AdminPageContainer = connect(mapStateToProps, mapDispatchToProps)(AdminPage);

export default AdminPageContainer;