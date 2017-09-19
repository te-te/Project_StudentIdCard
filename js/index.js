function getJsonp(res){
  $.ajax({
    url:"http://133.130.99.167/studentid/DB.php",
    type:"GET",
    dataType:"jsonp",
    data:{
      "mode":"select",
      "no":res
    },
    success:function(data){
      $(".index").hide();
      $(".card").show();
      $("#td_name").html(decodeURI(data['name']));
      $("#td_student_no").html(decodeURI(data['student_no']));
      $("#td_dept").html(decodeURI(data['dept']));
      $("#td_date").html(decodeURI(data['date']));
      $("#profile_img").attr("src", "./img/" + decodeURI(data['no']) + ".jpg");
      $("#edit_btn").val(decodeURI(data['no']));
    }
  });
}

$(document).ready(function(){
  var now = new Date();
  $("#confirm_btn").click(function(){
    var year = $('#year option:selected').text();
    var month = $('#month option:selected').text();
    var day = $('#day option:selected').text();
    if($('#year option:selected').text()=='선택'){
      year = now.getFullYear();
    }
    if($('#month option:selected').text()=='선택'){
      month = (now.getMonth()+1)>9 ? ''+(now.getMonth()+1) : '0'+(now.getMonth()+1);
    }
    if($('#day option:selected').text()=='선택'){
      day =now.getDate()>9 ? ''+now.getDate() : '0'+now.getDate();
    }
    var date = year+'년'+month+'월'+day+'일';

    $.ajax({
      url:"http://133.130.99.167/studentid/DB.php",
      type:"GET",
      dataType:"jsonp",
      data:{"mode":"update",
        "no":$("#confirm_btn").val(),
        "name":$("#name").val(),
        "student_no":$("#student_no").val(),
        "dept":$("#dept").val(),
        "date":date,
      },
      error:function(data){
        $(".edit").hide();
        $(".index").show();
      }
    });
  });

  $("#card_back_btn").click(function(){
    $(".card").hide();
    $(".index").show();
  });

  $("#edit_back_btn").click(function(){
    $(".edit").hide();
    $(".card").show();
  });

  $(".edit_btn").click(function(){
    $.ajax({
      url:"http://133.130.99.167/studentid/DB.php",
      type:"GET",
      dataType:"jsonp",
      data:{"mode":"select",
      "no":$("#edit_btn").val()},
      success:function(data){
        $(".card").hide();
        $(".edit").show();
        $("#name").val(decodeURI(data['name']));
        $("#student_no").val(decodeURI(data['student_no']));
        $("#dept").val(decodeURI(data['dept']));
        $("#date").val(decodeURI(data['date']));
        $("#edit_img").attr("src", "./img/" + decodeURI(data['no']) + ".jpg");
        $("#confirm_btn").val(decodeURI(data['no']));
      }
    });
  });

  $("#jo_btn").click(function(){
    var res = $("#jo_btn").val();
    getJsonp(res);
  });

  $("#kim_btn").click(function(){
    var res = $("#kim_btn").val();
    getJsonp(res);
  });

  $("#woo_btn").click(function(){
    var res = $("#woo_btn").val();
    getJsonp(res);
  });

  $("#yi_btn").click(function(){
    var res = $("#yi_btn").val();
    getJsonp(res);
  });

  $("#kwak_btn").click(function(){
    var res = $("#kwak_btn").val();
    getJsonp(res);
  });
});
