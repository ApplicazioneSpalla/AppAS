import {Linking} from 'react-native';

const LinkClick = (link) => {
    
    Linking.openURL(link.url);

    return {
        type: "LinkClick",
        link: link.name
    }

}

export default LinkClick;