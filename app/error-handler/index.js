import $ from 'jquery'

export function errorHandler(err, title) {
    let $errorHandler = $('#errorHandler')
    $errorHandler.find('.title').html(title)
    $errorHandler.find('.errorText').html(err.message)
    $errorHandler.toggleClass('hide')
  }