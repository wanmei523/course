import {
  http
} from './http'
//课程列表
function courses(params) {
  http('/courses', 'GET', params)
}
//课程详细
function course(course_id, params) {
  http('/courses/' + course_id, 'GET', params)
}
//课程资源
function resource(course_id, resource_id, params) {
  http('/courses/' + course_id + '/resource/' + resource_id, 'GET', params)
}
export default {
  courses,
  course,
  resource
}