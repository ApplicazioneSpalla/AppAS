import React from 'react';
import {connect} from 'react-redux';
import CreateNewsPage from './CreateNewsPage';
import Actions from './CreateNewsPageActions';

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
        news: state.news,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        CreateNewsTextChange: (text, source) => {
            dispatch(Actions.CreateNewsTextChange(text, source));
        },
        CreateNewsBtnClick: () => {
            dispatch(Actions.CreateNewsBtnClick());
        }
    }
};

const CreateNewsPageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateNewsPage);

export default CreateNewsPageContainer;