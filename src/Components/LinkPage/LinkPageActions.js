import {Linking} from 'react-native';

export const ActionTypes = {
    WEB_LINK_CLICK: "WEB_LINK_CLICK"
};

const WebLinkClick = (link) => {

    Linking.openURL(link.url);

    return {
        type: ActionTypes.WEB_LINK_CLICK,
        link: link.name
    }

};

const Actions = {WebLinkClick};

export  default  Actions;