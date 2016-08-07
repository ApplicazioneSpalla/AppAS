import React from 'react';
import { connect } from 'react-redux';
import AdminPage from './AdminPage';
import Actions from './AdminPageActions';

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        LinkClick: (navigator, destination) => {
            dispatch(Actions.LinkClick(navigator,destination));
        }
    }
};

const AdminPageContainer = connect(mapStateToProps, mapDispatchToProps)(AdminPage);

export default AdminPageContainer;