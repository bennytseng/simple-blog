App.messages = App.cable.subscriptions.create('CommentsChannel', {
    received: function(data) {
        $("#comments").removeClass('hidden');
        return $('#comments').append(this.renderMessage(data));
    },

    renderMessage: function(data) {
        return "<p>" + data.comment + "</p>";
    }
});