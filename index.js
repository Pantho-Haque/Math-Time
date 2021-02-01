
    var num;
    $("#gresult").hide();
    $("#clear").hide();
    $("#clear").click(function(){
        $("#multipier").empty();
        $("#gresult").hide();
        $("#clear").hide();
        $("#finalresult").html(" ");
    });
    
    
    $("#crttbl").click(function(e){
        $("#multipier").empty();
        num = $("#num")[0].value;
        for(var i=1;i<=10;i++){
            $("#multipier").append('<div id="line"><span class="txt">'+num+' * '+i+' =</span><input type="number" id="box'+i+'" class="rb" style="width: 90%"><span class="right" id="rig'+i+'">✔</span><span class="wrong" id="w'+i+'">❌</span><span class="rowr" id="ra'+i+'"></span></div>');
            
        }
        $(".right").hide();
        $(".wrong").hide();
        $(".rowr").hide();
        $("#gresult").show();
        
    });
    
    var cnt=["1","2","3","4","5","6","7","8","9","10"];
    $("#gresult").click(function(e){
        var crct=0,wrng=0;
        $(".right").hide();
        $(".wrong").hide();
        $(".rowr").hide();
        
        for(var i=1;i<=10;i++){
            var a =num*cnt[i-1];
            var b=  $("#box"+i)[0].value;
            if(a==b){
                $("#rig"+i).show();
                crct++;
            }
            else{
                $("#ra"+i).show();
                $("#ra"+i).text(a);
                $("#w"+i).show();
                wrng++;
            }
        }
        
        $("#finalresult").html("<a class='btn'>"+crct+" right & " +wrng+" wrong out of 10 </a>");
        $("#gresult").hide();
        $("#clear").show();
    
    });
    
   
