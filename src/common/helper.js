import empty from 'is-empty'

const dateFormat = (format, date) => {
  date instanceof Date || (date = new Date(date))
  const f = {
    'y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  let fd = ''
  for (const o in f) {
    if (new RegExp(o).test(format)) {
      fd = RegExp.lastMatch
      format = format.replace(fd, o === 'y+' ? f[o].toString().slice(-fd.length) : fd.length === 1 ? f[o] : (f[o] + 100).toString().slice(-fd.length))
    }
  }
  return format
}
const isEmpty = data => {
  return empty(data)
}
export default {
  install (Vue) {
    Vue.prototype.$dateFormat = dateFormat
    Vue.prototype.$isEmpty = isEmpty
  }
}
