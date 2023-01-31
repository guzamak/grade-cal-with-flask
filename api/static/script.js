$(document).ready(function() {

    var sub01 = [];
    var score01 = [];
    var credit01 = [];
    var num01 = {};

    $('#numform').on('submit', function(event) {;
        $(".textform01").remove();
        $('#submit01').remove();
        $(".out").remove();
        var num = document.getElementById("num").value;	
        num01.num = num;
        for (var i=0;i<num01.num;i++){
            let x = i + 1;
            $('#grade').append('<input class="textform01" id="sub'+i+'"name="sub" type="text" placeholder="วิชาที่ '+x+'"required>').hide().fadeIn(500);
            $('#grade').append('<input class="textform01" id="score'+i+'"name="score" type="number"min="1" max="100" placeholder="คะเเนน" required>').hide().fadeIn(500);
            $('#grade').append('<input class="textform01" id="credit'+i+'"name="credit" type="number"min="0.5" max="10" placeholder="หน่วยกิต"step="0.1" required>').hide().fadeIn(500);
        };
        $('#grade').append('<input id="submit01" name="submit" type="submit" value="คำนวณ" class="submit">').hide().fadeIn(500);
        event.preventDefault();
    });
    $('#grade').on('submit', function(event) {
        for (var i=0;i<num01.num;i++){
            sub01[i] = document.getElementById("sub"+i).value;	
            score01[i] = document.getElementById("score"+i).value;	
            credit01[i] = document.getElementById("credit"+i).value;	
        }
        sub = JSON.stringify(sub01);
        score = JSON.stringify(score01);
        credit = JSON.stringify(credit01);
        $.ajax({
			data : {
				"num" : num01.num,
				"sub" : sub,
                "score" : score,
                "credit" : credit
			},
            type : 'POST',
            url : '/grade'
        }).done(function(data) { 
            $(".out").remove();
            $('#allout').append('<h1 class="out">สรุป</h1>').hide().fadeIn(500);
            for (var i=0;i<num01.num;i++){
                $('#allout').append('<div class="out"><p>วิชา: '+sub01[i]+'  เกรด:  '+data.g[i]+'</p></div>');}
            $('#allout').append('<div class="out"><p>คะเเนนรวม:'+data.alls+'</p></div>');
            $('#allout').append('<div class="out"><p>เกรดเฉลี่ย:'+data.allg+'</p></div>');
            $(".out").hide().fadeIn();
        })
        event.preventDefault();
    });
})