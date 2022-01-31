// track active --------------------------------------

document.querySelectorAll('.track__wrapper').forEach((btn) =>
  btn.querySelector('.track-list').addEventListener('click', () => {
    btn.querySelector('.track-list-0').classList.toggle('track-list-0--active');
    btn.querySelector('.track-list__progress-0').classList.toggle('track-list__progress-0--active');
    btn.querySelector('.track-list__progress-0').classList.toggle('track-list__progress-0--active-2');
  } )  
);










// ------------------------------------------------------------------------
// модальное окно off on --------------------------------------------------
// ------------------------------------------------------------------------
document.querySelectorAll('._wrapper').forEach((btn) =>
  btn.querySelector('._m-click').addEventListener('click', () => {
    let pagePosition = window.scrollY;
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    document.body.classList.add('body__fixed');
    document.body.style.paddingRight = paddingOffset;
    document.body.style.backgroundColor = '#2c2c2c';
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';
    btn.querySelector('._m-wrapper').style.top = pagePosition + 'px';
    btn.querySelector('._m-inner').style.display = 'block';
    btn.querySelector('._m-wrapper').style.height = '100vh';
    document.querySelector('.left-block').style.top = '0px';
    btn.querySelector('._m-wrapper').classList.toggle('_m-wrapper-on');
  } )
);

document.querySelectorAll('._wrapper').forEach((btn) =>
  btn.querySelector('._m-click-2').addEventListener('click', () => {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    document.body.style.top = 'auto';
    document.body.classList.toggle('body__fixed');
    document.body.style.paddingRight = '0';
    window.scroll({top: pagePosition, left: 0});
    btn.querySelector('._m-inner').style.display = 'none';
    btn.querySelector('._m-wrapper').style.height = '10px';
    btn.querySelector('._m-wrapper').classList.toggle('_m-wrapper-on');
    btn.querySelector('._m-wrapper').style.top = 'auto';
  } )
);

document.querySelectorAll('._wrapper').forEach((btn) =>
  btn.querySelector('._m-click-3').addEventListener('click', () => {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    document.body.style.top = 'auto';
    document.body.classList.toggle('body__fixed');
    document.body.style.paddingRight = '0';
    window.scroll({top: pagePosition, left: 0});
    btn.querySelector('._m-inner').style.display = 'none';
    btn.querySelector('._m-wrapper').style.height = '10px';
    btn.querySelector('._m-wrapper').classList.toggle('_m-wrapper-on');
    btn.querySelector('._m-wrapper').style.top = 'auto';
  } )
);
document.querySelectorAll('._wrapper').forEach((btn) =>
  btn.querySelector('._m-click-4').addEventListener('click', () => {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    document.body.style.top = 'auto';
    document.body.classList.toggle('body__fixed');
    document.body.style.paddingRight = '0';
    window.scroll({top: pagePosition, left: 0});
    btn.querySelector('._m-inner').style.display = 'none';
    btn.querySelector('._m-wrapper').style.height = '10px';
    btn.querySelector('._m-wrapper').classList.toggle('_m-wrapper-on');
    btn.querySelector('._m-wrapper').style.top = 'auto';
  } )
);
// ------------------------------------------------------------------------
// модальное окно off on --------------------------------------------------
// ------------------------------------------------------------------------

$('.select').each(function() {
  const _this = $(this),
      selectOption = _this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      duration = 450;

  _this.hide();
  _this.wrap('<div class="select"></div>');
  $('<div>', {
      class: 'new-select',
      text: _this.children('option:disabled').text()
  }).insertAfter(_this);

  const selectHead = _this.next('.new-select');
  $('<div>', {
      class: 'new-select__list'
  }).insertAfter(selectHead);

  const selectList = selectHead.next('.new-select__list');
  for (let i = 1; i < selectOptionLength; i++) {
      $('<div>', {
          class: 'new-select__item',
          html: $('<span>', {
              text: selectOption.eq(i).text()
          })
      })
      .attr('data-value', selectOption.eq(i).val())
      .appendTo(selectList);
  }

  const selectItem = selectList.find('.new-select__item');
  selectList.slideUp(0);
  selectHead.on('click', function() {
      if ( !$(this).hasClass('on') ) {
          $(this).addClass('on');
          selectList.slideDown(duration);

          selectItem.on('click', function() {
              let chooseItem = $(this).data('value');

              $('select').val(chooseItem).attr('selected', 'selected');
              selectHead.text( $(this).find('span').text() );

              selectList.slideUp(duration);
              selectHead.removeClass('on');
          });

      } else {
          $(this).removeClass('on');
          selectList.slideUp(duration);
      }
  });
});

$(document).ready(function(){
$('.spoiler-title').click(function(){
$(this).parent().children('.spoiler-body').slideToggle(500);
});
});