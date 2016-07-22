import {Linking} from 'react-native';

const LinkClick = (link) => {
    
    Linking.openURL(link.url);

    return {
        type: "LINK_CLICK",
        link: link.name
    }

}

export default LinkClick;