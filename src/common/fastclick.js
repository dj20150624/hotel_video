import FastClick from 'fastclick'

export default function () {
  const userAgent = navigator.userAgent.toLowerCase()
  const iosVersion = userAgent.match(/cpu iphone os (.*?) like mac os/)
  // iOS >=11 has fixed this bug
  if (!iosVersion || parseInt(iosVersion[1]) < 11) {
    console.info('fastclick is invoke')
    FastClick.attach(document.body)
  }
}
