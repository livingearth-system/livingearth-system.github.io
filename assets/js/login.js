$(function () {

  $('.login').each(function () {
    if ($('.login-form').length > 0) {
      document.querySelectorAll('.login-form .validate').forEach(form => {
        form.addEventListener('submit', event => {
          event.preventDefault();
          if (!form.checkValidity()) {
            event.preventDefault();
          } else {
            var f = $(form);
            var error = $('.form-error', f);
            error.text('').removeClass('visible');
            fetch('/login/data.json').then(response => response.json()).then(obj => {
              var proceed = false;
              $(obj).each(function () {
                if ($('[name="login"]', f).val() === this.login) {
                  if ($('[name="password"]', f).val() === this.password) {
                    proceed = this;
                  }
                }
              });
              if (proceed) {
                localStorage.setItem('auth', proceed.hash);
                window.location.replace(proceed.url);
              } else {
                error.html('Invalid login/password').addClass('visible');
              }
            });
          }
          form.classList.add('was-validated')
        }, false)
      })
    } else {
      const auth = localStorage.getItem('auth');
      if (auth === sessionID) {
        $(this).removeClass('hidden');
      } else {
        window.location.replace('../login/');
      }
    }

    $('.login-download', this).each(function () {
      var that = $(this), select = $('select', that);
      that.find('.btn').on('click', function () {
        if (select.val()) {
          window.open(select.val(), '_blank');
        }
      });
    });

    $('.login-logout', this).on('click', function (e) {
      e.preventDefault();
      localStorage.removeItem('auth');
      window.location.replace('../login/');
    });
  });
});