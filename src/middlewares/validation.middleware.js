const checkPostInput = (req, res, next) => {
  try {
    const { title, text } = req.body;

    if (!title) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Title cannot be empty!',
        data: null,
      });
    }

    if (!text) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Text cannot be empty!',
        data: null,
      });
    }
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
    checkPostInput
}
