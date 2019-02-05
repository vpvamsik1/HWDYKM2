      // Initialize Firebase
  var config = {
        apiKey: "AIzaSyBYTcRWnctpwmr0z_NJ5RjgL4JWkTxuBeQ",
        authDomain: "quiz-ec6d0.firebaseapp.com",
        databaseURL: "https://quiz-ec6d0.firebaseio.com",
        projectId: "quiz-ec6d0",
        storageBucket: "quiz-ec6d0.appspot.com",
        messagingSenderId: "629268767843"
      };
    firebase.initializeApp(config);
    
  var database = firebase.database();
  
  $("#B1").click(function() {

    $("#C1").hide();
    $("#C2").show();

  });

  $("#A1").click(function(){

    $("#C2").hide();
    $("#C1").show();

  });

  $("#A2").click(function(){

    $("#C2").hide();
    $("#C3").show();

  });

  $("#A3").click(function(){

    $("#C3").hide();
    $("#C2").show();

  });

  $("#A4").click(function(){

    $("#C3").hide();
    $("#C4").show();

  });

  $("#A5").click(function(){

    $("#C4").hide();
    $("#C3").show();

  });

  $("#A6").click(function(){

    $("#C4").hide();
    $("#C5").show();

  });

  $("#A7").click(function(){

    $("#C5").hide();
    $("#C4").show();

  });

  $("#A8").click(function(){

    $("#C5").hide();
    $("#C6").show();

  });

  var sec1CA = 0;
  var sec2CA = 0;
  var sec3CA = 0;
  var sec4CA = 0;
  var totalScore = 0;

  $("#correct1").html(sec1CA);
  $("#correct2").html(sec2CA);
  $("#correct3").html(sec3CA);
  $("#correct4").html(sec4CA);

  function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
  }





  $("#A8").click(function() {

    var nameIn = $("#I1").val();
    alert(nameIn);

    var Swift = $("#I2").val();
    var swiftCap = Swift.toUpperCase();

    if (swiftCap == "SWIFT") {

        sec1CA++;
        // alert("vsdv");
        $("#correct1").html(sec1CA);

    }

    var Nolan = $("#I3").val();
    var nolanCap = Nolan.toUpperCase();

    if (nolanCap == "NOLAN") {

        sec2CA++;
        // alert("vsdv");
        $("#correct2").html(sec2CA);

    }

    var Shapiro = $("#I4").val();
    var shapiroCap = Shapiro.toUpperCase();

    if (shapiroCap == "SHAPIRO") {

        sec3CA++;
        // alert("vsdv");
        $("#correct3").html(sec3CA);

    }

    var Milo = $("#I5").val();
    var miloCap = Milo.toUpperCase();

    if (miloCap == "MILO") {

        sec3CA++;
        // alert("vsdv");
        $("#correct3").html(sec3CA);

    }

    let answer2 = $( ".Q2:checked" ).val();
    if(answer2 == "C"){

        sec1CA++;
        $("#correct1").html(sec1CA);
    }

    let answer3 = $( ".Q3:checked" ).val();
    if(answer3 == "C"){
        sec1CA++;
        $("#correct1").html(sec1CA);
    }
    
    let answer4 = $( ".Q4:checked" ).val();
    if(answer4 == "C"){
    
        sec1CA++;
        $("#correct1").html(sec1CA);    
    }

    let answer5 = $( ".Q5:checked" ).val();
    if(answer5 == "C"){

        sec1CA++;
        $("#correct1").html(sec1CA);
    }

    let answer7 = $( ".Q7:checked" ).val();
    if(answer7 == "C"){

        sec2CA++;
        $("#correct2").html(sec2CA);
    }

    let answer8 = $( ".Q8:checked" ).val();
    if(answer8 == "C"){
        sec2CA++;
        $("#correct2").html(sec2CA);
    }
    
    let answer9 = $( ".Q9:checked" ).val();
    if(answer9 == "C"){
    
        sec2CA++;
        $("#correct2").html(sec2CA);  
    }

    let answer10 = $( ".Q10:checked" ).val();
    if(answer10 == "C"){

        sec2CA++;
        $("#correct2").html(sec2CA);
    }

    let answer11 = $( ".Q11:checked" ).val();
    if(answer11 == "C"){

        sec2CA++;
        $("#correct2").html(sec2CA);
    }

    let answer12 = $( ".Q12:checked" ).val();
    if(answer12 == "C"){

        sec2CA++;
        $("#correct2").html(sec2CA);
    }

    let answer13 = $( ".Q13:checked" ).val();
    if(answer13 == "C"){

        sec2CA++;
        $("#correct2").html(sec2CA);
    }

    let answer14 = $( ".Q14:checked" ).val();
    if(answer14 == "C"){

        sec2CA++;
        $("#correct2").html(sec2CA);
    }

    let answer15 = $( ".Q15:checked" ).val();
    if(answer15 == "C"){

        sec2CA++;
        $("#correct2").html(sec2CA);
    }

    let answer16 = $( ".Q16:checked" ).val();
    if(answer16 == "C"){

        sec3CA++;
        $("#correct3").html(sec3CA);
    }

    let answer17 = $( ".Q17:checked" ).val();
    if(answer17 == "C"){

        sec3CA++;
        $("#correct3").html(sec3CA);
    }

    let answer18 = $( ".Q18:checked" ).val();
    if(answer18 == "C"){

        sec3CA++;
        $("#correct3").html(sec3CA);
    }

    let answer19 = $( ".Q19:checked" ).val();
    if(answer19 == "C"){

        sec3CA++;
        $("#correct3").html(sec3CA);
    }

    let answer22 = $( ".Q22:checked" ).val();
    if(answer22 == "C"){

        sec3CA++;
        $("#correct3").html(sec3CA);
    }

    let answer23 = $( ".Q23:checked" ).val();
    if(answer23 == "C"){

        sec3CA++;
        $("#correct3").html(sec3CA);
    }

    let answer24 = $( ".Q24:checked" ).val();
    if(answer24 == "C"){

        sec3CA++;
        $("#correct3").html(sec3CA);
    }

    let answer25 = $( ".Q25:checked" ).val();
    if(answer25 == "C"){

        sec3CA++;
        $("#correct3").html(sec3CA);
    }

    let answer26 = $( ".Q26:checked" ).val();
    if(answer26 == "C"){

        sec4CA++;
        $("#correct4").html(sec4CA);
    }

    let answer27 = $( ".Q27:checked" ).val();
    if(answer27 == "C"){

        sec4CA++;
        $("#correct4").html(sec4CA);
    }

    let answer28 = $( ".Q28:checked" ).val();
    if(answer28 == "C"){

        sec4CA++;
        $("#correct4").html(sec4CA);
    }

    let answer29 = $( ".Q29:checked" ).val();
    if(answer29 == "C"){

        sec4CA++;
        $("#correct4").html(sec4CA);
    }

    let answer30 = $( ".Q30:checked" ).val();
    if(answer30 == "C"){

        sec4CA++;
        $("#correct4").html(sec4CA);
    }
    
    totalScore = sec1CA + sec2CA + sec3CA + sec4CA;
    $("#totalScore").html(totalScore);

    var totalPer = percentage(totalScore, 30);
  
    $("#percentage").html(Math.floor(totalPer) + "%");

    var checkedAnswers = {
        Name:nameIn,
        Q1:swiftCap,
        Q2:answer2,
        Q3:answer3,
        Q4:answer4,
        Q5:answer5,
        Q6:nolanCap,
        Q7:answer7,
        Q8:answer8,
        Q9:answer9,
        Q10:answer10,
        Q11:answer11,
        Q12:answer12,
        Q13:answer13,
        Q14:answer14,
        Q15:answer15,
        Q16:answer16,
        Q17:answer17,
        Q18:answer18,
        Q19:answer19,
        Q20:shapiroCap,
        Q21:miloCap,
        Q22:answer22,
        Q23:answer23,
        Q24:answer24,
        Q25:answer25,
        Q26:answer26,
        Q27:answer27,
        Q28:answer28,
        Q29:answer29,
        Q30:answer30,

    }

    database.ref().push(checkedAnswers);

    console.log(checkedAnswers.Name);
    console.log(checkedAnswers.Q2)
  });


  
  




  $('[data-toggle="popover"]').popover()

  $('[data-toggle="tooltip"]').tooltip()