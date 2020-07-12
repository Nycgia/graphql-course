'use strict'

const courses = [
  {
    _id: 'anyid',
    title: 'Mi titulo',
    teacher: 'Mi profesor',
    description: 'Un descripción',
    topic: 'programación'
  },
  {
    _id: 'anyid2',
    title: 'Mi titulo 2',
    teacher: 'Mi profesor 2',
    description: 'Un descripción 2',
    topic: 'programación'
  },
  {
    _id: 'anyid3',
    title: 'Mi titulo 3',
    teacher: 'Mi profesor 3',
    description: 'Un descripción 3',
    topic: 'programación'
  }
]

module.exports = {
  Query: {
    getCourses: () => courses,
    getCourse: (root, args) => courses.find(course => course._id === args.id)
  }
}
