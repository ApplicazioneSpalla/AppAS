class GlobalActions {

    static TextChange(text, source) {

        return {
            type: "TEXT_CHANGE",
            text: text,
            source: source
        }

    }

    static goToDestination(navigator, destination) {

        navigator.push({ id: destination });

        return {
            type: "GOTO_DESTINATION",
            destination: destination
        }
    }


}

export default GlobalActions;