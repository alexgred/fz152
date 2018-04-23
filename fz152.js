(function ($) {
  'use strict';

  $.fn.fz152 = function (useroptions) {

    // Define options and extend with user
    var options = {
      type: 'twoButton'
    };

    $.extend(options, useroptions);

    var openBlock = function () {
      $('.fz152-block').fadeIn(400);
      $('.fz152-block').removeClass('fz152-block_close');
      $('.fz152-block').addClass('fz152-block_open');
    }

    var closeBlock = function () {
      $('.fz152-block').fadeOut(400);
      $('.fz152-block').removeClass('fz152-block_open');
      $('.fz152-block').addClass('fz152-block_close');
    }

    // Main method
    this.fz152 = function () {
      var $elem = $(this);

      var description = $('<div class="fz152-block__description"><h3>Согласие на обработку персональных данных</h3><p>Настоящим в соответствии с Федеральным законом № 152-ФЗ «О персональных данных» от 27.07.2006 года свободно, своей волей и в своем интересе выражаю свое безусловное согласие на обработку моих персональных данных ООО «Эко Сервис", зарегистрированным в соответствии с законодательством РФ по адресу: <br /> 191186, Санкт-Петербург, Невский пр., д. 22-24, литер А, пом. 101-Н. (далее по тексту - Оператор). <br /> Персональные данные - любая информация, относящаяся к определенному или определяемому на основании такой информации физическому лицу.</p><p>Настоящее Согласие выдано мною на обработку следующих персональных данных:</p><ul><li>Email;</li><li>Телефон;</li><li>Имя;</li><li>IP-адрес.</li></ul><p>Согласие дано Оператору для совершения следующих действий с моими персональными данными с использованием средств автоматизации и/или без использования таких средств: сбор, систематизация, накопление, хранение, уточнение (обновление, изменение), использование, обезличивание, а также осуществление любых иных действий, предусмотренных действующим законодательством РФ как неавтоматизированными, так и автоматизированными способами.</p><p>Данное согласие дается Оператору для обработки моих персональных данных в следующих целях:</p><ul><li>предоставление мне услуг/работ;</li><li>направление в мой адрес уведомлений, касающихся предоставляемых услуг/работ;</li><li>подготовка и направление ответов на мои запросы;</li><li>направление в мой адрес информации, в том числе рекламной, о мероприятиях/товарах/услугах/работах Оператора.</li></ul><p>Настоящее согласие действует до момента его отзыва путем направления соответствующего уведомления на электронный адрес mail@eco-service.ru. В случае отзыва мною согласия на обработку персональных данных Оператор вправе продолжить обработку персональных данных без моего согласия при наличии оснований, указанных в пунктах 2 – 11 части 1 статьи 6, части 2 статьи 10 и части 2 статьи 11 Федерального закона №152-ФЗ «О персональных данных» от 26.06.2006 г.</p></div>');
      var buttonAccept = $('<div class="fz152-block__button fz152-block__accept">Принимаю</div>');
      var buttonDecline = $('<div class="fz152-block__button fz152-block__decline">Не принимаю</div>');
      var blackScreen = $('<div class="fz152-block__black-screen"></div>');
      var clickRegion = $('<div class="fz152-click"></div>');

      var blockContent = $('<div class="fz152-block__content"></div>');

      var buttons = $('<div class="fz152-block__buttons">');

      var block = $('<div class="fz152-block"></div>');

      clickRegion.click(function () {
        openBlock();
      });

      $elem.before(clickRegion);

      buttonAccept.click(function () {
        $elem.click();
      });

      buttonDecline.click(function () {
        closeBlock();
      });

      buttons.append(buttonAccept, buttonDecline);

      blockContent.append(description, buttons);

      block.append(blackScreen, blockContent);

      $('body').append(block);
    };

    // Init
    this.fz152();

    // Return
    return this;
  };

})(jQuery);