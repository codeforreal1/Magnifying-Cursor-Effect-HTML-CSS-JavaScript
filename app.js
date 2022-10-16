let width = 0
let height = 0

const container = document.querySelector('.main')
const main = document.querySelector("img[class='main']")
const secondary = document.querySelector('.secondary')
secondary.style.background = `url("${main.getAttribute('src')}") no-repeat`

const newImage = new Image()

$('.container').mousemove(function (e) {
  if (!width && !height) {
    newImage.src = $('.main').attr('src')
    width = newImage.width
    height = newImage.height
  } else {
    const position = $(this).offset()
    const pageX = e.pageX - position.left
    const pageY = e.pageY - position.top

    if (
      pageX < $(this).width() &&
      pageX > 0 &&
      pageY < $(this).height() &&
      pageY > 0
    ) {
      $('.secondary').fadeIn(100)
    } else {
      $('.secondary').fadeOut(100)
    }
    if ($('.secondary').is(':visible')) {
      const targetX =
        Math.round(
          (pageX / $('.main').width()) * width - $('.secondary').width() / 2
        ) * -1
      const targetY =
        Math.round(
          (pageY / $('.main').height()) * height - $('.secondary').height() / 2
        ) * -1

      secondary.style.left = `${pageX - $('.secondary').width() / 2}px`
      secondary.style.top = `${pageY - $('.secondary').height() / 2}px`
      secondary.style.backgroundPosition = `${targetX}px ${targetY}px`
    }
  }
})
