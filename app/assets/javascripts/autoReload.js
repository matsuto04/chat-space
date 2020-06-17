$(function(){
  function buildPost(message){
    if ( message.image ) {
      let html =
      `<div class="chat-message" data-message-id=${message.id}>
        <div class="chat-message">
        <div class="chat-message__name">
          <div class="chat-message__name--userName">
            ${message.user_name}
          </div>
          <div class="chat-message__name--date">
            ${message.created_at}
          </div>
        </div>
        <div class="chat-message__comment">
         <p class="Message boy">
          ${message.boy}
        </p>
        <img class="Message__image" src="${message.image}">
      </div>
    </div>`
      return html;
    } else {
      let html =
      `<div class="chat-message" data-message-id=${message.id}>
        <div class="chat-message">
          <div class="chat-message__name">
            <div class="chat-message__name--userName">
            ${message.user_name}
          </div>
          <div class="chat-message__name--date">
            ${message.created_at}
          </div>
        </div>
        <div class="chat-message__comment">
        <p class="Message boy">
           ${message.boy}
        </p>
        </div>
      </div>`
      return html;
    };
  }

  let reloadMessages = function() {
    let last_message_id = $('.chat-message:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildPost(message)
        });
        $('.chat-main__center').append(insertHTML);
        $('.chat-main__center').animate({ scrollTop: $('.chat-main__center')[0].scrollHeight});
       
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});