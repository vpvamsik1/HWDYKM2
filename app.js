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
    // alert(nameIn);

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
    // var answer2;
    // if (answer2) {
    //     answer2 = $( ".Q2:checked" ).val();
    //     if(answer2 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer2) {
    //     answer2 = "undefined";
    //     if(answer2 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    var answer2 = $( ".Q2:checked" ).val();
    // answer2 = "blank";
    if(answer2 == "C"){

        sec1CA++;
        $("#correct1").html(sec1CA);
    }
    else if(!answer2){
        answer2 = "blank";
    }

    // console.log(checkedAnswers.Q2);

    let answer3 = $( ".Q3:checked" ).val();
    if(answer3 == "C"){
        sec1CA++;
        $("#correct1").html(sec1CA);
    } else if(!answer3){
        answer3 = "blank";
    }

    // var answer3;
    // if (answer3) {
    //     answer3 = $( ".Q3checked" ).val();
    //     if(answer3 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer3) {
    //     answer3 = "undefined";
    //     if(answer3 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    
    // var answer4;
    // if (answer4) {
    //     answer4 = $( ".Q4checked" ).val();
    //     if(answer4 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer4) {
    //     answer4 = "undefined";
    //     if(answer4 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }

    let answer4 = $( ".Q4:checked" ).val();
    if(answer4 == "C"){
    
        sec1CA++;
        $("#correct1").html(sec1CA);    
    }else if(!answer4){
        answer4 = "blank";
    }

    // var answer5;
    // if (answer5) {
    //     answer5 = $( ".Q5checked" ).val();
    //     if(answer5 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer5) {
    //     answer5 = "undefined";
    //     if(answer5 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }

    let answer5 = $( ".Q5:checked" ).val();
    if(answer5 == "C"){

        sec1CA++;
        $("#correct1").html(sec1CA);
    }else if(!answer5){
        answer5 = "blank";
    }

    // var answer7;
    // if (answer7) {
    //     answer7 = $( ".Q7checked" ).val();
    //     if(answer7 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer7) {
    //     answer7 = "undefined";
    //     if(answer7 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }

    let answer7 = $( ".Q7:checked" ).val();
    if(answer7 == "C"){

        sec2CA++;
        $("#correct2").html(sec2CA);
    }else if(!answer7){
        answer7 = "blank";
    }

    // var answer8;
    // if (answer8) {
    //     answer8 = $( ".Q8checked" ).val();
    //     if(answer8 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer8) {
    //     answer8 = "undefined";
    //     if(answer8 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    let answer8 = $( ".Q8:checked" ).val();
    if(answer8 == "C"){
        sec2CA++;
        $("#correct2").html(sec2CA);
    }else if(!answer8){
        answer8 = "blank";
    }
    
    // var answer9;
    // if (answer9) {
    //     answer9 = $( ".Q9checked" ).val();
    //     if(answer9 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer9) {
    //     answer9 = "undefined";
    //     if(answer9 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    let answer9 = $( ".Q9:checked" ).val();
    if(answer9 == "C"){
    
        sec2CA++;
        $("#correct2").html(sec2CA);  
    }else if(!answer9){
        answer9 = "blank";
    }

    // var answer10;
    // if (answer10) {
    //     answer10 = $( ".Q10checked" ).val();
    //     if(answer10 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer10) {
    //     answer10 = "undefined";
    //     if(answer10 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }

    let answer10 = $( ".Q10:checked" ).val();
    if(answer10 == "C"){

        sec2CA++;
        $("#correct2").html(sec2CA);
    }else if(!answer10){
        answer10 = "blank";
    }

    // var answer11;
    // if (answer11) {
    //     answer11 = $( ".Q11checked" ).val();
    //     if(answer11 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer11) {
    //     answer11 = "undefined";
    //     if(answer11 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }

    let answer11 = $( ".Q11:checked" ).val();
    if(answer11 == "C"){

        sec2CA++;
        $("#correct2").html(sec2CA);
    }else if(!answer11){
        answer11 = "blank";
    }

    // var answer12;
    // if (answer12) {
    //     answer12 = $( ".Q12checked" ).val();
    //     if(answer12 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer12) {
    //     answer12 = "undefined";
    //     if(answer12 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }

    let answer12 = $( ".Q12:checked" ).val();
    if(answer12 == "C"){

        sec2CA++;
        $("#correct2").html(sec2CA);
    }else if(!answer12){
        answer12 = "blank";
    }

    // var answer13;
    // if (answer13) {
    //     answer13 = $( ".Q13checked" ).val();
    //     if(answer13 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer13) {
    //     answer13 = "undefined";
    //     if(answer13 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }

    let answer13 = $( ".Q13:checked" ).val();
    if(answer13 == "C"){

        sec2CA++;
        $("#correct2").html(sec2CA);
    }else if(!answer13){
        answer13 = "blank";
    }

    // var answer14;
    // if (answer14) {
    //     answer14 = $( ".Q14checked" ).val();
    //     if(answer14 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer14) {
    //     answer14 = "undefined";
    //     if(answer14 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }

    let answer14 = $( ".Q14:checked" ).val();
    if(answer14 == "C"){

        sec2CA++;
        $("#correct2").html(sec2CA);
    }else if(!answer14){
        answer14 = "blank";
    }

    // var answer15;
    // if (answer15) {
    //     answer15 = $( ".Q15checked" ).val();
    //     if(answer15 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer15) {
    //     answer15 = "undefined";
    //     if(answer15 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }

    let answer15 = $( ".Q15:checked" ).val();
    if(answer15 == "C"){

        sec2CA++;
        $("#correct2").html(sec2CA);
    }else if(!answer15){
        answer15 = "blank";
    }

    // var answer16;
    // if (answer16) {
    //     answer16 = $( ".Q16checked" ).val();
    //     if(answer16 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer16) {
    //     answer16 = "undefined";
    //     if(answer16 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }

    let answer16 = $( ".Q16:checked" ).val();
    if(answer16 == "C"){

        sec3CA++;
        $("#correct3").html(sec3CA);
    }else if(!answer16){
        answer16 = "blank";
    }

    // var answer17;
    // if (answer17) {
    //     answer17 = $( ".Q17checked" ).val();
    //     if(answer17 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer17) {
    //     answer17 = "undefined";
    //     if(answer17 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }

    let answer17 = $( ".Q17:checked" ).val();
    if(answer17 == "C"){

        sec3CA++;
        $("#correct3").html(sec3CA);
    }else if(!answer17){
        answer17 = "blank";
    }

    // var answer18;
    // if (answer18) {
    //     answer18 = $( ".Q18checked" ).val();
    //     if(answer18 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer18) {
    //     answer18 = "undefined";
    //     if(answer18 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }

    let answer18 = $( ".Q18:checked" ).val();
    if(answer18 == "C"){

        sec3CA++;
        $("#correct3").html(sec3CA);
    }else if(!answer18){
        answer18 = "blank";
    }
    // var answer19;
    // if (answer19) {
    //     answer19 = $( ".Q19checked" ).val();
    //     if(answer19 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer19) {
    //     answer19 = "undefined";
    //     if(answer19 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    let answer19 = $( ".Q19:checked" ).val();
    if(answer19 == "C"){

        sec3CA++;
        $("#correct3").html(sec3CA);
    }else if(!answer19){
        answer19 = "blank";
    }

    // var answer22;
    // if (answer22) {
    //     answer22 = $( ".Q22checked" ).val();
    //     if(answer22 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer22) {
    //     answer22 = "undefined";
    //     if(answer22 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }

    let answer22 = $( ".Q22:checked" ).val();
    if(answer22 == "C"){

        sec3CA++;
        $("#correct3").html(sec3CA);
    }else if(!answer22){
        answer22 = "blank";
    }
    // var answer23;
    // if (answer23) {
    //     answer23 = $( ".Q23checked" ).val();
    //     if(answer23 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer23) {
    //     answer23 = "undefined";
    //     if(answer23 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }

    let answer23 = $( ".Q23:checked" ).val();
    if(answer23 == "C"){

        sec3CA++;
        $("#correct3").html(sec3CA);
    }
    else if(!answer23){
        answer23 = "blank";
    }

    // var answer24;
    // if (answer24) {
    //     answer24 = $( ".Q24checked" ).val();
    //     if(answer24 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer24) {
    //     answer24 = "undefined";
    //     if(answer24 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    let answer24 = $( ".Q24:checked" ).val();
    if(answer24 == "C"){

        sec3CA++;
        $("#correct3").html(sec3CA);
    }
    else if(!answer24){
        answer24 = "blank";
    }

    // var answer25;
    // if (answer25) {
    //     answer25 = $( ".Q25checked" ).val();
    //     if(answer25 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer25) {
    //     answer25 = "undefined";
    //     if(answer25 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }

    let answer25 = $( ".Q25:checked" ).val();
    if(answer25 == "C"){

        sec3CA++;
        $("#correct3").html(sec3CA);
    }
    else if(!answer25){
        answer25 = "blank";
    }

    // var answer26;
    // if (answer26) {
    //     answer26 = $( ".Q26checked" ).val();
    //     if(answer26 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer26) {
    //     answer26 = "undefined";
    //     if(answer26 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }

    let answer26 = $( ".Q26:checked" ).val();
    if(answer26 == "C"){

        sec4CA++;
        $("#correct4").html(sec4CA);
    }
    else if(!answer26){
        answer26 = "blank";
    }

    // var answer27;
    // if (answer27) {
    //     answer27 = $( ".Q27checked" ).val();
    //     if(answer27 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer27) {
    //     answer27 = "undefined";
    //     if(answer27 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }

    let answer27 = $( ".Q27:checked" ).val();
    if(answer27 == "C"){

        sec4CA++;
        $("#correct4").html(sec4CA);
    }else if(!answer27){
        answer27 = "blank";
    }

    // var answer28;
    // if (answer28) {
    //     answer28 = $( ".Q28checked" ).val();
    //     if(answer28 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer28) {
    //     answer28 = "undefined";
    //     if(answer28 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }

    let answer28 = $( ".Q28:checked" ).val();
    if(answer28 == "C"){

        sec4CA++;
        $("#correct4").html(sec4CA);
    }else if(!answer28){
        answer28 = "blank";
    }

    // var answer29;
    // if (answer29) {
    //     answer29 = $( ".Q29checked" ).val();
    //     if(answer29 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer29) {
    //     answer29 = "undefined";
    //     if(answer29 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }

    let answer29 = $( ".Q29:checked" ).val();
    if(answer29 == "C"){

        sec4CA++;
        $("#correct4").html(sec4CA);
    }else if(!answer29){
        answer29 = "blank";
    }

    // var answer30;
    // if (answer30) {
    //     answer30 = $( ".Q30checked" ).val();
    //     if(answer30 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }
    // else if(!answer30) {
    //     answer30 = "undefined";
    //     if(answer30 == "C"){

    //         sec1CA++;
    //         $("#correct1").html(sec1CA);
    //     }
    // }

    let answer30 = $( ".Q30:checked" ).val();
    if(answer30 == "C"){

        sec4CA++;
        $("#correct4").html(sec4CA);
    }else if(!answer30){
        answer30 = "blank";
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
    console.log(checkedAnswers.Q2);
  });


  
  




  $('[data-toggle="popover"]').popover()

  $('[data-toggle="tooltip"]').tooltip()