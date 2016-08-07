class GlobalActions {

    static TextChange(type, text, source) {

        return {
            type,
            text,
            source
        }

    }

    static goToDestination(type, navigator, destination) {

        navigator.push({id: destination});

        return {
            type,
            destination
        }
    }
    
}

export default GlobalActions;