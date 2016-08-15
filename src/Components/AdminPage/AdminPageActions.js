import GlobalActions from '../../Services/GlobalActions';

export const ActionTypes = {
  LINK_CLICK:"LINK_CLICK"
};

const LinkClick =  (navigator,destination)=> {
    return GlobalActions.goToDestination(ActionTypes.LINK_CLICK,navigator,destination);
}

const Actions = { LinkClick};

export default Actions;