const predictFace = async (app, model, imageUrl) => {
    try {
        const response = await app.models.predict(model, imageUrl);
        return { status: 200, response };
    } catch (err) {
        return { status: 500, response: 'Error getting face' };
    }
}

module.exports = predictFace;
