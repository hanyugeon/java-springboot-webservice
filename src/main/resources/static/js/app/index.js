var main = {
    init : function () {
    var _this = this;

    $('#btn-save').on('click', function () {
        _this.save();
        });

    $('#btn-update').on('click', function () {  // btn-update라는 id를 가진 HTML엘리멘트에 click 이벤트가 발생 할 때 함수 실행
        _this.update();
        });

    },
    save : function () {
        var data = {
            title: $('#title').val(),
            author: $('#author').val(),
            content: $('#content').val()
            };

        $.ajax({
            type: 'POST',
            url: '/api/v1/posts',
            datatype: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
            }).done(function() {
                alert('글이 등록되었습니다.');
                window.location.href = '/'; // 글 등록이 성공하면 메인페이지로 이동.
            }).fail(function (error) {
                alert(JSON.stringify(error));
            });
        },
    update : function () {
        var data = {
            title: $('#title').val(),
            content: $('#content').val()
        };

        var id = $('#id').val();

        $.ajax({
            type: 'PUT',
            url: '/api/v1/posts/'+id,
            datatype: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function() {
            alert('글이 수정되었습니다.');
            window.location.href = '/'; // 원래 화면으로 이동
        }).fail(function (error) {
            alert(JSON.stringify(error));
        });
    },
};

main.init();