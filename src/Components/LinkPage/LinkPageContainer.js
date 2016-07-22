import React from 'react';
import { connect } from 'react-redux';
import LinkPage from './LinkPage';
import LinkClick from './LinkPageActions';

const mapStateToProps = (state) => {
    return {
        lastLinkClick : state.lastLinkClick,
        currentPage: state.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    LinkClick: (link) => {
      dispatch(LinkClick(link));
    }
  }
}

const LinkPageContainer = connect(mapStateToProps,mapDispatchToProps)(LinkPage);

export default LinkPageContainer;