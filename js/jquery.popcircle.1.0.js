
(function($){
    $.popcircle = function(selector, settings){
       var config = {
	        'spacing':'10px',
	        'count':5,
	        'type':'full',
	        'offset':0,
	        'ease':'easeOutQuad',
	        'time':'slow'
	    };
	    if (settings){$.extend(config, settings);}
	    var obj = $(selector);
	    var trig_width=parseInt($(selector).parent().siblings().css('width'));
	    var trig_height=parseInt($(selector).parent().siblings().css('height'));
	    var trig_left=parseInt($(selector).parent().siblings().css('left'));
	    var trig_top=parseInt($(selector).parent().siblings().css('top'));
	    var child_width=parseInt($(selector).children('li').css('width'));
	    var child_height=parseInt($(selector).children('li').css('height'));
	    var con_left=((trig_width/2)-(child_width/2)+trig_left)+'px';
	    var con_top=((trig_height/2)-(child_height/2)+trig_top)+'px';
	    var spacing=parseInt(config.spacing);
	    
	    var li = obj.children('li');
        var count = li.length;
        var inc=0;
        $.each( li, function( key, value ) {
        	var cls=$(this).attr('class');
        	var top=$(this).css('top');
        	var left=$(this).css('left');
        	if(con_left==left&&con_top==top)
        	{
        		
        		switch (config.type)
        		{
	        		case 'full':
	        			   	
							var cnt=360/count;
			        		var rd=((cnt * (Math.PI/180))*key);
			        		var x=parseInt(con_left)+((parseInt(con_left)+spacing)*Math.cos(rd));
			        		var y=parseInt(con_top)+((parseInt(con_top)+spacing)*Math.sin(rd));
							
			        	
                    break;
                    case 'half':
                    		var cnt=180/count;
			        		
			        		var rd=((cnt * (Math.PI/180))*key)+config.offset;
			        		var x=parseInt(con_left)+((parseInt(con_left)+spacing)*Math.cos(rd));
			        		var y=parseInt(con_top)+((parseInt(con_top)+spacing)*Math.sin(rd));
							
                    
                    break;
                    case 'quad':
                    		var cnt=90/count;
			        		
			        		var rd=((cnt * (Math.PI/180))*key)+config.offset;
			        		var x=parseInt(con_left)+((parseInt(con_left)+spacing)*Math.cos(rd));
			        		var y=parseInt(con_top)+((parseInt(con_top)+spacing)*Math.sin(rd));
							
                    break;
        		}
        		
        	   	$(this).animate({ top: y,left:x }, {duration: config.time,easing: config.ease});
	        	
        	}
        	else
        	{
	        	$(this).animate({ top: con_top,left:con_left }, {duration: config.time,easing: config.ease});
        	}
		  
		});
		return this;
	    
    };
})(jQuery);