const asyncHandler = fn => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (err) {

        res.status(err.status || 500).send(err.message || "Internal Server Error");
        next(err);
    }
}

module.exports = asyncHandler;