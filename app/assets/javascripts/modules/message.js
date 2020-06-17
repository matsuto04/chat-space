$(function(){
  function buildPost(message){
    if ( message.image ) {
      let html = `<div class="chat-message" data-message-id=${message.id}>
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
    }else{
      let html = `<div class="chat-message" data-message-id=${message.id}>
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
  $(".contact-form").on("submit",function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
     let html = buildPost(data);
     $(".chat-main__center").append(html);
     $(".contact-form")[0].reset();
     $('.chat-main__center').animate({ scrollTop: $('.chat-main__center')[0].scrollHeight});
     
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
    .always(function(){
      $('.contact-form__send').removeAttr("disabled");
    })
  });
});

