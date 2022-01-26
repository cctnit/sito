// $(document).on('turbolinks:load', function () {
  'use strict';

  // prelaoder
  $('.preloader').delay(100).fadeOut(10); 

  $(document).ready(function () {

    // search-popup
    function searchPopup() {
      $('[data-toggle="search"]').on('click', function () {
        $('.search-block').fadeIn(200);
        setTimeout(function () {
          $('.search-block').addClass('is-visible');
          var value = $('#search-field').val();
          $('#search-query').focus().val('').val(value);
        }, 250);
      });
      $('[data-toggle="search-close"]').on('click', function () {
        $('.search-block').fadeOut(200).removeClass('is-visible');
      });
    }
    searchPopup();

  });

  // tab
  $('.tab-content').find('.tab-pane').each(function (idx, item) {
    var navTabs = $(this).closest('.code-tabs').find('.nav-tabs'),
      title = $(this).attr('title');
    navTabs.append('<li class="nav-item"><a class="nav-link" href="#">' + title + '</a></li>');
  });

  $('.code-tabs ul.nav-tabs').each(function () {
    $(this).find("li:first").addClass('active');
  })

  $('.code-tabs .tab-content').each(function () {
    $(this).find("div:first").addClass('active');
  });

  $('.nav-tabs a').click(function (e) {
    e.preventDefault();
    var tab = $(this).parent(),
      tabIndex = tab.index(),
      tabPanel = $(this).closest('.code-tabs'),
      tabPane = tabPanel.find('.tab-pane').eq(tabIndex);
    tabPanel.find('.active').removeClass('active');
    tab.addClass('active');
    tabPane.addClass('active');
  });

  // Accordions
  $('.collapse').on('shown.bs.collapse', function () {
    $(this).parent().find('.la-plus').removeClass('la-plus').addClass('la-minus');
  }).on('hidden.bs.collapse', function () {
    $(this).parent().find('.la-minus').removeClass('la-minus').addClass('la-plus');
  });

// });