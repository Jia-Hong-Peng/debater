$(() => {
  // toggle about section
  $('[data-click="toggleAbout"]').on('click tap', function(){
    $('#about').slideToggle();
  });

  // initialize filter
  function filterPoints(filters) {
    $('#points .point').show();
    Object.keys(filters).forEach((key) => {
      $('#points .point').not($('#points .point').has('[data-' + key + '="' + filters[key] + '"]')).hide();
    });
    //$('#points .point').has('[data-topic="'+filters.topic+'"]').show();
  }

  let filters = {};
  $('#topics').on('click tap', '[data-topic]', function () {
    const topic = $(this).attr('data-topic');
    if (topic.length > 0) {
      filters.topic = topic;
    } else {
      delete filters.topic;
    }
    $('#topics li').removeClass('active');
    $(this).parents('li').addClass('active');
    filterPoints(filters);
  });
  $('#relations').on('click tap', '[data-relation]', function () {
    const relation = $(this).attr('data-relation');
    if (relation.length > 0) {
      filters.relation = relation;
    } else {
      delete filters.relation;
    }
    $('#relations li').removeClass('active');
    $(this).parents('li').addClass('active');
    filterPoints(filters);
  });
  $('#professions').on('click tap', '[data-profession]', function () {
    const profession = $(this).attr('data-profession');
    if (profession.length > 0) {
      filters.profession = profession;
    } else {
      delete filters.profession;
    }
    $('#professions li').removeClass('active');
    $(this).parents('li').addClass('active');
    filterPoints(filters);
  });

});


import {home} from 'view/home';
