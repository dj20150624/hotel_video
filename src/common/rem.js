(function (d, w) {
  const baseSize = 16

  function rem () {
    const scale = document.documentElement.clientWidth / 375
    document.documentElement.style.fontSize = (baseSize * scale) + 'px'
  }

  rem()
  w.addEventListener('resize', rem)
})(document, window)
