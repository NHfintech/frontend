/* eslint-disable */

function httpTest ($http, host, data) {
    return $http({
      method: 'post',
      url: host + '/users/',
      data
    })
}

function signInAPI ($http, host, data) {
  return $http({
    method: 'post',
    url: `${host}/auth/login`,
    data
  })
}

function signUpAPI ($http, host, data) {
  return $http({
    method: 'post',
    url: `${host}/users/signup`,
    data
  })
}

function checkingOverlapAPI ($http, host, data) {
  return $http({
    method: 'post',
    url: `${host}/users/overlap`,
    data
  })
}

function getEventListAPI ($http, host, data) {
  return $http({
    method: 'get',
    url: `${host}/event`,
    params: data
  })
}

function getEventAPI ($http, host, id) {
  return $http({
    method: 'get',
    url: `${host}/event/${id}`,
  })
}

function createEventAPI ($http, host, data) {
  return $http({
    method: 'post',
    url: `${host}/event`,
    data
  })
}

function updateEventAPI ($http, host, id, data) {
  return $http({
    method: 'put',
    url: `${host}/event/${id}`,
    data
  })
}

function destroyEventAPI ($http, host, id) {
  return $http({
    method: 'delete',
    url: `${host}/event/${id}`,
  })
}

function closeEventAPI ($http, host, id) {
  return $http({
    method: 'put',
    url: `${host}/event/close/${id}`,
  })
}
  
// noinspection JSUnusedGlobalSymbols
export default {
    httpTest,
    signInAPI,
    signUpAPI,
    checkingOverlapAPI,
    getEventListAPI,
    getEventAPI,
    createEventAPI,
    updateEventAPI,
    destroyEventAPI,
    closeEventAPI
}
