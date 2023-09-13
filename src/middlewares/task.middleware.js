const { runQuery } = require('../config/database.config');
const { fetchTaskById } = require('../queries/task');

const checkValidTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const [task = null] = await runQuery(fetchTaskById, [id]);
        if (!task) {
            return res.status(400).json({
                status: 'error',
                code: 400,
                message: 'task does not exist!',
                data: null,
            });
        }

        return req.user.id === task.user_id
            ? next()
            : res.status(400).json({
                status: 'error',
                code: 400,
                message: 'You are not authorized to make this edit!',
                data: null,
            });
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    checkValidTask,
};
