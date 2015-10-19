     $(document).ready(function(){
       $('.experHeader').hide();
      $('.experienced').hide();
      $('.educationHeader').hide();
      $('.education').hide();
      $('.hobbiesHeader').hide();
      $('.hobbies').hide();
      $('#ball1').mouseenter(function(){
          $('.who').hide();
          $('.explanation').hide();
          $('.educationHeader').hide();
          $('.education').hide();
          $('.hobbiesHeader').hide();
          $('.hobbies').hide();
          $('.experHeader').animate({
            height: 'show'
          }, 2000);
          $('.experienced').animate({
            height: 'show'
          }, 2000);
          $('.third').css("padding-top","0px");
          $('.container-fluid').css("box-shadow", "0px 5px 2px #80d8ff");
      });
      $('#ball2').mouseenter(function(){
        $('.who').hide();
        $('.explanation').hide();
        $('.experHeader').hide();
        $('.experienced').hide();
        $('.hobbiesHeader').hide();
        $('.hobbies').hide();
        $('.educationHeader').animate({
          height: 'show'
        },2000);
        $('.education').animate({
          height: 'show'
        }, 2000);
        $('.third').css("padding-top","0px");
        $('.container-fluid').css("box-shadow", "0px 5px 2px #68b4bd");
      });
      $('#ball3').mouseenter(function(){
        $('.who').hide();
        $('.explanation').hide();
        $('.experHeader').hide();
        $('.experienced').hide();
        $('.educationHeader').hide();
        $('.education').hide();
        $('.hobbiesHeader').animate({
          height: 'show'
        }, 2000);
        $('.hobbies').animate({
          height: 'show'
        }, 2000);
        $('.third').css("padding-top","0px");
        $('.container-fluid').css("box-shadow", "0px 5px 2px #a7ffeb");
      });

     });
