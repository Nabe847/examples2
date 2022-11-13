const courseData = [
    {
        id: 1,
        title: 'Node.js 入門',
        description: 'Express.js, MongoDB, Mocha などを使ってアプリケーションを作りながらNode.jsについて学びます',
        topic: 'Node.js',
        url: 'https://example.com/courses/nodejs/primer',
    },
    {
        id: 2,
        title: 'GraphQL 入門',
        description: '実際にGraphQLサーバを実装しながらGraphQLの基本を学びます',
        topic: 'GraphQL',
        url: 'https://example.com/courses/graphql/primer',
    },
    {
        id: 3,
        title: 'JavaScript 上級',
        description:
            'すべての人のためのJavaScript上級講座! スコープ、クロージャ、プロトタイプ、this など、JavaScript独特の概念をマスターしましょう',
        topic: 'JavaScript',
        url: 'https://example.com/courses/javascript/advanced',
    },
];

// 非同期でDBに接続してるつもり
const courseRepository = {
    getCourses: () => Promise.resolve(courseData),
    findById: ({ id }) => Promise.resolve(courseData.filter((course) => course.id == id)[0]),
    findByTopic: ({ topic }) => Promise.resolve(courseData.filter((course = course.topic === topic))),
    save: (course) => {
        const index = courseData.findIndex((c) => c.id === course.id);
        if (index === -1) {
            return null;
        }

        courseData[index] = { ...course };
        return Promise.resolve({ ...courseData[index] });
    },
};

module.exports = {
    courseRepository,
};
