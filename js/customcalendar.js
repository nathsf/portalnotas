document.addEventListener('DOMContentLoaded', function() {
 if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        initialViews = 'listWeek';
    }else{
        initialViews = 'dayGridMonth';
    }   
  
  var calendarEl = document.getElementById('calendar');
  var today = moment().day();
  
  var calendar = new FullCalendar.Calendar(calendarEl, {
    

    locale: 'es',
    
      headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek'
      },
      
      buttonText:    {
      today:    'Today',
      month:    'Mes',
      week:     'Semana',
      day:      'Día',
      list:     'Lista'
    },
    
    
          navLinks: true,
          firstDay: 1,
          hiddenDays: [ 0 ],
          initialView: initialViews,

          visibleRange: {
            start: '2022-09-26',
            end: '2022-12-31'
          },
          validRange: {
            start: '2022-09-26',
            end: '2022-12-31'
          },
          
            editable: true,
            selectable: false, 
            unselectAuto:true,
            eventOverlap: false,
            eventColor: '#f16621', 
            slotDuration: '00:15',
            allDaySlot : false,
            eventStartEditable: false,
            eventDurationEditable:false,
            slotLabelInterval: "00:15",
            longPressDelay: 0,
            nowIndicator: "true", //indicator of current time
            slotMinTime: '07:00',
            slotMaxTime: '20:45',
            eventContent: function( arg ) {
          return { html: arg.event.title };
      },
      eventDidMount: function(info) {
        $(info.el).tooltip({ 
          title: info.event.extendedProps.description,
          placement: "top",
          trigger: "hover",
          container: "body",
          html: true,
        });
      },
      events: [
        {
          id: '1',
          title: '<span>PSICOLOGÍA DE LA PERSON.</span><br><strong>PP1</strong>',
          start: '2022-09-26 08:30:00',
          end: '2022-09-26 09:45:00',
          description: ' <ul><li >Grupo:<strong> PP01</strong></li><li >Horario:<strong> Lun 8:30 - 9:45, Jue 11:00 - 12:00</strong></li><li >Inicio: <strong>22/08/2022</strong> </li><li >Fin: <strong>22/08/2022</strong> </li> <li >Docente: <strong>Mariano Alcazar V.</strong> </li><li >Créditos: <strong>5</strong> </li></ul>',

        },
        {
          id: '2',
          title: '<span>PSICOLOGÍA DESARROLLO HUMANO I.</span><br><strong>PD1</strong>',
          start: '2022-09-30 09:00:00',
          end: '2022-09-30 10:30:00',
          description: '<ul><li >Grupo:<strong> PP01</strong></li><li >Horario:<strong> Vie 09:00 - 10:30</strong></li><li >Inicio: <strong>30/09/2022</strong> </li><li >Fin: <strong>30/09/2022</strong> </li> <li >Docente: <strong>Mariano Alcazar V.</strong> </li><li >Créditos: <strong>5</strong> </li></ul>',

 
        },

        {
          id: '3',
          title: '<span>PSICOLOGÍA DE LA PERSON.</span><br><strong>PP1</strong>',
          start: '2022-09-29 11:00:00',
          end: '2022-09-29 12:00:00',
          description: '<ul><li >Grupo:<strong> PP01</strong></li><li >Horario:<strong> Lun 8:30 - 9:45, Jue 11:00 - 12:00</strong></li><li >Inicio: <strong>22/08/2022</strong> </li><li >Fin: <strong>22/08/2022</strong> </li> <li >Docente: <strong>Mariano Alcazar V.</strong> </li><li >Créditos: <strong>5</strong> </li></ul> ',

 
        }
        // more events ...
      ],


          // events: 'https://fullcalendar.io/demo-events.json'
    });

   
    calendar.render();

    var cdate = calendar.getDate();
    var cmonth = cdate.toLocaleString('default', { month: 'long' });
    var cyear = + cdate.getFullYear();

    $( ".fc-cmonth-button " ).html( `<p class="mb-0 text-uppercase pt-1">${cmonth} ${cyear} </p>` );

    $(".fc-next-button , .fc-prev-button").on('click', function() {
      var cdate = calendar.getDate();
      var cmonth = cdate.toLocaleString('default', { month: 'long' });
      var cyear = + cdate.getFullYear();
      console.log(cmonth + cyear);

      $( ".fc-cmonth-button" ).html( `<p class="mb-0 text-uppercase pt-1">${cmonth} ${cyear}</p>` );
    });
   
    

    if ($(window).width() < 800) {
      calendar.changeView('listWeek');
    }

   
   
});
jQuery(function($) {
  $('#asignaturas').multiSelect({
    'noneText':'-- Seleccionar asignaturas --',
  });
  
   

    $('.multi-select-menuitem input[id^="asignaturas"]').on('click', function() {

      if($(this).attr('id') === "asignaturas_0"){
        $('#course-1').toggleClass('course_active')
        if($('#course-1').hasClass('course_active')) {
          $('#course-1').show();
        } 
        else {
        $('#course-1').hide();
        }
      }
       if($(this).attr('id')  === "asignaturas_1"){
        $('#course-2').toggleClass('course_active')
        if($('#course-2').hasClass('course_active')) {
          $('#course-2').show();
        } 
        else {
        $('#course-2').hide();
        }
      }
       if($(this).attr('id')  === "asignaturas_2"){
        $('#course-3').toggleClass('course_active')
        if($('#course-3').hasClass('course_active')) {
          $('#course-3').show();
        } 
        else {
        $('#course-3').hide();
        }
      }
});



  
})
