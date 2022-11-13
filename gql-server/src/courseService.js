const { courseRepository } = require('./courseRepository');

/**
 * 指定したIDのコース情報を取得する
 */
const getCourse = ({ id }) => courseRepository.findById({ id });

/**
 * コース情報を一括取得する
 */
const getCourses = ({ topic }) => {
    if (topic) {
        return courseRepository.findByTopic(topic);
    }
    return courseRepository.getCourses();
};

/**
 * 指定したコース情報のトピックを変更する
 */
const updateCourseTopic = async ({ id, topic }) => {
    const course = await courseRepository.findById({ id });
    if (!course) {
        return null;
    }

    course.topic = topic;
    return await courseRepository.save(course);
};

module.exports = {
    getCourse,
    getCourses,
    updateCourseTopic,
};
