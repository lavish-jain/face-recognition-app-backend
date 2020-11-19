const predictFace = async (app, model, imageUrl) => {
    try {
        const response = await app.models.predict(model, imageUrl);
        return { status: 200, response };
    } catch (err) {
        console.error(err);
        telemetryClient.trackException({exception: err});
        return { status: 500, response: err };
    }
}

module.exports = predictFace;
