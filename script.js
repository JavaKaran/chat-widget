function initializeChatWidget() {
    var chatWidgetContainer = document.createElement('div');
    chatWidgetContainer.id = 'chat-widget';

    var chatWidgetHeader = document.createElement('div');
    chatWidgetHeader.classList.add('chat-widget-header');
    chatWidgetHeader.textContent = 'Chat Widget';

    var chatWidgetBody = document.createElement('div');
    chatWidgetBody.classList.add('chat-widget-body');

    var chatWidgetInput = document.createElement('input');
    chatWidgetInput.classList.add('chat-widget-input');
    chatWidgetInput.type = 'text';
    chatWidgetInput.placeholder = 'Type your message...';

    chatWidgetContainer.appendChild(chatWidgetHeader);
    chatWidgetContainer.appendChild(chatWidgetBody);
    chatWidgetContainer.appendChild(chatWidgetInput);

    var style = document.createElement('style');
    style.textContent = `
      #chat-widget {
        position: fixed;
        bottom: 95px;
        right: 20px;
        width: 300px;
        background-color: #f2f2f2;
        border: 1px solid #ccc;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        font-family: Arial, sans-serif;
        display: none;
        flex-direction: column;
      }
      .chat-widget-header {
        padding: 10px;
        background-color: #333;
        color: #fff;
        cursor: pointer;
      }
      .chat-widget-body {
        padding: 10px;
        min-height: 50px;
        max-height: 150px;
        overflow: auto;
      }
      .chat-widget-body p {
        margin: 8px 0 8px auto;
        padding: 7px 15px;
        background-color: white;
        border-radius: 20px;
        width: fit-content;
        font-size: 13px;
      }
      .chat-widget-input {
        width: auto;
        padding: 5px;
        border: 1px solid #ccc;
      }
      .chat-widget-circle {
        font-family: Arial, sans-serif;
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #333;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        cursor: pointer;
        padding: 5px;
      }
    `;

    document.head.appendChild(style);

    document.body.appendChild(chatWidgetContainer);

    let chatWidgetCircle = document.createElement('div');
    chatWidgetCircle.classList.add('chat-widget-circle');
    chatWidgetCircle.textContent = 'Chat';

    document.body.appendChild(chatWidgetCircle);

    chatWidgetCircle.addEventListener('click', function () {
        let chatWidgetContainerStyle = window.getComputedStyle(chatWidgetContainer);
        if (chatWidgetContainerStyle.display === 'none') {
            chatWidgetContainer.style.display = 'flex';
        } else {
            chatWidgetContainer.style.display = 'none';
        }
    });

    chatWidgetInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            var message = chatWidgetInput.value;
            displayMessage(message);
            chatWidgetInput.value = '';

            scrollToBottom();
        }
    });

    function displayMessage(message) {
        var messageElement = document.createElement('p');
        messageElement.textContent = message;
        chatWidgetBody.appendChild(messageElement);
    }

    function scrollToBottom() {
        chatWidgetBody.scrollTop = chatWidgetBody.scrollHeight;
    }
}

initializeChatWidget();
