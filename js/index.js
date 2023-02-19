$(() => {
  const settings = {
    async: true,
    crossDomain: true,
    url: 'https://api.upbit.com/v1/market/all?isDetails=true',
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  };

  $(document).ready(function(){
    $('.krw_btn').trigger('click');
  });

  $('.krw_btn').click(function () {
    $('.market_select li').css('border-top', '3px solid #fff');
    $(this).css('border-top', '3px solid #333');
    findMarketSelect('KRW');
  });

  $('.btc_btn').click(function () {
    $('.market_select li').css('border-top', '3px solid #fff');
    $(this).css('border-top', '3px solid #333');
    findMarketSelect('BTC');
  });

  $('.usdt_btn').click(function () {
    $('.market_select li').css('border-top', '3px solid #fff');
    $(this).css('border-top', '3px solid #333');
    findMarketSelect('USDT');
  });

  function findMarketSelect(type) {
    $('.coin_list').empty();
    
    $.ajax(settings).done(function (response) {
      let count = 0;
      for (let i = 0; i < response.length; i++) {
        if (response[i]['market'].match(type + '-')) {
          $('.coin_list').append("<tr>\
          <td>" + response[i]['korean_name'] + "</td>\
          <td>" + response[i]['english_name'] + "</td>\
          <td>" + response[i]['market_warning'] + "</td>\
          </tr>");
          count++;
        }
      }

      $('.coin_count span').text(count);
    });
  }
});