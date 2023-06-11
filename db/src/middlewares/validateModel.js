
module.exports = (req, res , next) => {

    const { model } = req.params;

    const arrayModels = [ "Character", "Film", "Planet"];


    if(arrayModels.includes(model)) {
        return next();
    } else {
        throw Error("Invalid Model")
    }
}