$(function() {
  $('.accordion-header').on('click', function(e) {
    const content = $(this).next('.accordion-content')

    if (content.is(':visible')) {
      content.slideUp()
    } else {
      content.slideDown()
    }
  })

  $('.todos').find('button').on('click', function() {
    const ul = $(this).next();

    ul.empty();

    $.ajax({
      url: 'https://dummyjson.com/todos',
      type: 'GET',
      success: function(data) {
        let innerHtml = '';

        data.todos.forEach(function(item) {
          innerHtml += `<li>${item.todo}</li>`;
        })

        ul.html(innerHtml)
      },
      error: function(error) {
        console.log(error)
      }
    })
  })
})