const goToDestination = (navigator,destination) => {

    navigator.push({ id: destination });

    return {
        type: "GOTO_DESTINATION",
        destination: destination
    }
}


const Actions = { goToDestination };

export default Actions;