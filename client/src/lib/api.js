import axios from 'axios'

const baseUrl = '/api'

export function getAllMembers() {
  return axios.get(`${baseUrl}/members`)
}

export function getSingleMember(id) {
  return axios.get(`${baseUrl}/members/${id}`)
}

export function getAllCourses() {
  return axios.get(`${baseUrl}/courses`)
}