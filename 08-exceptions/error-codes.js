function someGenericProcess() {
    // do something generic processing
    let statusCode = process();
    if (statusCode == 1) {
        console.log("every a ok!")
    } else if (statusCode == -1) {
        console.log("Network down")
    } else if (statusCode == -2) {
        console.log("Wrong data format");
    }
}

function process() {
    return 1;
}