$(document).ready(function(){
    var numbers2 = [[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0] ];
	var numbers3 = [[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0] ];
	var numberL = [[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0] ];
    var i=0;
	var j=0;
	var I = 1;
	var J = 1;
	//var timer = setTimeout(alert("telegram"), 150);
	function getRandomInt(min, max) {
  			return Math.floor(Math.random() * (max - min)) + min;
						}
	function moveup(){
		var movetop = " ";
		for(i=0; i<=3; i++){
			for(j=0; j<=3; j++){
								if(numberL[i][j]!=0){
									I = 1;
									J = 1;
									I+=i;
									J+=j;
									movetop=".one-"+I+"-"+J;
									//
									switch(numberL[i][j]){
										case 1:
											$(movetop).animate({top:'-=80px'}, 125);
											
											break;
										case 2:
											$(movetop).animate({top:'-=160px'}, 125);
											
											break;
										case 3:
											$(movetop).animate({top:'-=240px'}, 125);
											break;
									}
								}
							}
					}
	}
	//----------------------------------------------------------------------------------------------
	function moveleft(){
		var movel = " ";
		for(i=0; i<=3; i++){
			for(j=0; j<=3; j++){
								if(numberL[i][j]!=0){
									I = 1;
									J = 1;
									I+=i;
									J+=j;
									movel=".one-"+I+"-"+J;
									//
									switch(numberL[i][j]){
										case 1:
											$(movel).animate({left:'-=80px'}, 125);
											
											break;
										case 2:
											$(movel).animate({left:'-=160px'}, 125);
											
											break;
										case 3:
											$(movel).animate({left:'-=240px'}, 125);
											break;
									}
								}
							}
					}
	}
	function moveright(){
		var mover = " ";
		for(i=3; i>=0; i--){
			for(j=3; j>=0; j--){
								if(numberL[i][j]!=0){
									I = 1;
									J = 1;
									I+=i;
									J+=j;
									mover=".one-"+I+"-"+J;
									//
									switch(numberL[i][j]){
										case 1:
											$(mover).animate({left:'+=80px'}, 125);
											
											break;
										case 2:
											$(mover).animate({left:'+=160px'}, 125);
											
											break;
										case 3:
											$(mover).animate({left:'+=240px'}, 125);
											break;
									}
								}
							}
					}
	}
	function movedown(){
		var movebottom = " ";
		for (i=3; i>=0; i--){
			for(j=3; j>=0; j--){
								if(numberL[i][j]!=0){
									I = 1;
									J = 1;
									I+=i;
									J+=j;
									movebottom=".one-"+I+"-"+J;
									switch(numberL[i][j]){
										case 1:
											$(movebottom).animate({top:'+=80px'}, 125);
											
											break;
										case 2:
											$(movebottom).animate({top:'+=160px'}, 125);
											
											break;
										case 3:
											$(movebottom).animate({top:'+=240px'}, 125);
											break;
									}
								}
			}
		}
	}
	function addNumber(){
		var x=0;
		var y=0;
		var z=3;
		x = getRandomInt(0, 4);
		y = getRandomInt(0, 4);
		if (numbers2[x][y]==0){
			z = getRandomInt(0, 2);
			switch(z){
				case 0:
					numbers2[x][y]=2;
					break;
				case 1:
					numbers2[x][y]=4;
					break;
			}
		} else{
			addNumber();
		}
	}
	
	addNumber();
	addNumber();
	
    function show(){
			$("#sell-1-1").empty();
        if(numbers2[0][0] != 0){
			$("#sell-1-1").append("<div class='one-1-1 one'></div>");
			$(".one-1-1").html(numbers2[0][0]);
        }else{
            $("#sell-1-1").html(" ");
			$("#sell-1-1").css("background-color","burlywood");
        }
        	$("#sell-1-2").empty();
        if(numbers2[0][1] != 0){
			$("#sell-1-2").append("<div class='one-1-2  one'></div>");
			$(".one-1-2").html(numbers2[0][1]);
						
        }else{
            $("#sell-1-2").html(" ");
			$("#sell-1-2").css("background-color","burlywood");
        }
		
             $("#sell-1-3").empty();       
        if(numbers2[0][2] !=0){
			$("#sell-1-3").append("<div class='one-1-3 one'></div>");
			$(".one-1-3").html(numbers2[0][2]);
						
        }else{
            $("#sell-1-3").html(" ");
			$("#sell-1-3").css("background-color","burlywood");
        }
        
		
            $("#sell-1-4").empty();
        if(numbers2[0][3] != 0){
			$("#sell-1-4").append("<div class='one-1-4 one'></div>");
			$(".one-1-4").html(numbers2[0][3]);
						
        }else{
            $("#sell-1-4").html(" ");
			$("#sell-1-4").css("background-color","burlywood");
        }

            $("#sell-2-1").empty();
        if (numbers2[1][0] != 0){
			$("#sell-2-1").append("<div class='one-2-1 one'></div>");
			$(".one-2-1").html(numbers2[1][0]);
						
        }else{
            $("#sell-2-1").html(" ");
			$("#sell-2-1").css("background-color","burlywood");
        }
        
            $("#sell-2-2").empty();
        if(numbers2[1][1]!= 0){
			$("#sell-2-2").append("<div class='one-2-2 one'></div>");
			$(".one-2-2").html(numbers2[1][1]);
						
        }else{
            $("#sell-2-2").html(" ");
			$("#sell-2-2").css("background-color","burlywood");
        }
        
            $("#sell-2-3").empty();
        if(numbers2[1][2]!= 0){
			$("#sell-2-3").append("<div class='one-2-3 one'></div>");
			$(".one-2-3").html(numbers2[1][2]);
						
        }else{
            $("#sell-2-3").html(" ");
			$("#sell-2-3").css("background-color","burlywood");
        }
        
            $("#sell-2-4").empty();
        if(numbers2[1][3] != 0){
			$("#sell-2-4").append("<div class='one-2-4 one'></div>");
			$(".one-2-4").html(numbers2[1][3]);
						
        }else{
            $("#sell-2-4").html(" ");
			$("#sell-2-4").css("background-color","burlywood");
        }

            $("#sell-3-1").empty();
        if(numbers2[2][0] != 0){
			$("#sell-3-1").append("<div class='one-3-1 one'></div>");
			$(".one-3-1").html(numbers2[2][0]);
						
        }else{
            $("#sell-3-1").html(" ");
			$("#sell-3-1").css("background-color","burlywood");
        }
        
            $("#sell-3-2").empty();
        if(numbers2[2][1] != 0){
			$("#sell-3-2").append("<div class='one-3-2 one'></div>");
			$(".one-3-2").html(numbers2[2][1]);
						
        }else{
            $("#sell-3-2").html(" ");
			$("#sell-3-2").css("background-color","burlywood");
        }
        
            $("#sell-3-3").empty();
        if(numbers2[2][2] != 0){
			$("#sell-3-3").append("<div class='one-3-3 one'></div>");
			$(".one-3-3").html(numbers2[2][2]);
						
        }else{
            $("#sell-3-3").html(" ");
			$("#sell-3-3").css("background-color","burlywood");
        }
        
            $("#sell-3-4").empty();
        if(numbers2[2][3] != 0){
			$("#sell-3-4").append("<div class='one-3-4 one'></div>");
			$(".one-3-4").html(numbers2[2][3]);
						
        }else{
            $("#sell-3-4").html(" ");
			$("#sell-3-4").css("background-color","burlywood");
        }

        
            $("#sell-4-1").empty();
        if(numbers2[3][0] != 0){
			$("#sell-4-1").append("<div class='one-4-1 one'></div>");
			$(".one-4-1").html(numbers2[3][0]);
						
        }else{
            $("#sell-4-1").html(" ");
			$("#sell-4-1").css("background-color","burlywood");
        }
        
            $("#sell-4-2").empty();
        if(numbers2[3][1] != 0){
			$("#sell-4-2").append("<div class='one-4-2 one'></div>");
			$(".one-4-2").html(numbers2[3][1]);
						
        }else{
            $("#sell-4-2").html(" ");
			$("#sell-4-2").css("background-color","burlywood");
        }
        
            $("#sell-4-3").empty();
        if(numbers2[3][2] != 0){
			$("#sell-4-3").append("<div class='one-4-3 one'></div>");
			$(".one-4-3").html(numbers2[3][2]);
						
        }else{
            $("#sell-4-3").html(" ");
			$("#sell-4-3").css("background-color","burlywood");
        }
        
            $("#sell-4-4").empty();
        if(numbers2[3][3] != 0){
			$("#sell-4-4").append("<div class='one-4-4 one'></div>");
			$(".one-4-4").html(numbers2[3][3]);
						
        }else{
            $("#sell-4-4").html(" ");
			$("#sell-4-4").css("background-color","burlywood");
        }
		for(i=0; i<=3; i++){
			for(j=0; j<=3; j++){
				if(numbers2[i][j]!=0){
					I = 1;
					J = 1;
					ChangeColor=" ";
					I+=i;
					J+=j;
					ChangeColor=".one-"+I+"-"+J;
					switch(numbers2[i][j]){
						case 2:
							$(ChangeColor).css("background-color","OrangeRed");
							$(ChangeColor).css("color","white");
							break;
						case 4:
							$(ChangeColor).css("background-color","Crimson");
							$(ChangeColor).css("color","white");
							break;
						case 8:
							$(ChangeColor).css("background-color","LawnGreen");
							$(ChangeColor).css("color","black");
							break;
						case 16:
							$(ChangeColor).css("background-color","Gray");
							$(ChangeColor).css("color","black");
							$(ChangeColor).css("color","black");
							break;
						case 32:
							$(ChangeColor).css("background-color","Indigo");
							$(ChangeColor).css("color","white");
							break;
						case 64:
							$(ChangeColor).css("background-color","Olive");
							$(ChangeColor).css("color","white");
							break;
						case 128:
							$(ChangeColor).css("background-color","MediumSeaGreen");
							$(ChangeColor).css("color","white");
							break;
						
						
							
					}
				}
			}
		}
    }
		
	function up(){
		if(i-l<0){
			numbers2[0][j]=numbers2[i][j];
			numberL[i][j]=l-1;
			if(i!=0){							/*Если передвигать не надо*/
				numbers2[i][j]=0;
				
			}
		} else if(numbers2[i-l][j]==0){
			l++;
			up();
		} else if((numbers2[i-l][j]==numbers2[i][j])&&(numbers3[i-l][j]==0)){
					numbers2[i][j]=0;
					numbers3[i-l][j]=1;
					numbers2[i-l][j]*=2;
					numberL[i][j]=l;
		} else if((numbers2[i-l][j]!=numbers2[i][j])||((numbers3[i-l][j]==1)&&(numbers2[i-l][j]==numbers2[i][j]))){
					numbers2[i-l+1][j]=numbers2[i][j];
					numberL[i][j]=l-1;
					numbers3[i-l][j]=0;
					if(l!=1){
						numbers2[i][j]=0;
					}
		}
	}
	/*-------------------------------------------------------------------------------------------*/
	function down(){
		if(i+l>3){
			numbers2[3][j]=numbers2[i][j];
			numberL[i][j]=l-1;
			if(i!=3){							/*Если передвигать не надо*/
				numbers2[i][j]=0;
			}
		} else if(numbers2[i+l][j]==0){
			l++;
			down();
		} else if((numbers2[i+l][j]==numbers2[i][j])&&(numbers3[i+l][j]==0)){
					numbers2[i][j]=0;
					numbers3[i+l][j]=1;
					numbers2[i+l][j]*=2;
					numberL[i][j]=l;
		} else if((numbers2[i+l][j]!=numbers2[i][j])||((numbers3[i+l][j]==1)&&(numbers2[i+l][j]==numbers2[i][j]))){
					numbers2[i+l-1][j]=numbers2[i][j];
					numberL[i][j]=l-1;
					numbers3[i+l][j]=0;
					if(l!=1){
						numbers2[i][j]=0;
					}
		}
	}
/*-------------------------------------------------------------------------------------------*/
	function right(){
		if(j+l>3){//------------------------------<
			numbers2[i][3]=numbers2[i][j];
			numberL[i][j]=l-1;
			if(j!=3){							/*Если передвигать не надо*/
				numbers2[i][j]=0;
			}
		} else if(numbers2[i][j+l]==0){
			l++;
			right();
		} else if((numbers2[i][j+l]==numbers2[i][j])&&(numbers3[i][j+l]==0)){
					numbers2[i][j]=0;
					numbers3[i][j+l]=1;
					numbers2[i][j+l]*=2;
					numberL[i][j]=l;
		} else if((numbers2[i][j+l]!=numbers2[i][j])||((numbers3[i][j+l]==1)&&(numbers2[i][j+l]==numbers2[i][j]))){
					numbers2[i][j+l-1]=numbers2[i][j];
					numberL[i][j]=l-1;
					numbers3[i][j+l]=0;
					if(l!=1){
						numbers2[i][j]=0;
					}
		}
	}

/*-------------------------------------------------------------------------------------------*/
	function left(){
		if(j-l<0){
			numbers2[i][0]=numbers2[i][j];
			numberL[i][j]=l-1;
			if(j!=0){							/*Если передвигать не надо*/
				numbers2[i][j]=0;
			}
		} else if(numbers2[i][j-l]==0){
			l++;
			left();
		} else if((numbers2[i][j-l]==numbers2[i][j])&&(numbers3[i][j-l]==0)){
					numbers2[i][j]=0;
					numbers3[i][j-l]=1;
					numbers2[i][j-l]*=2;
					numberL[i][j]=l;
		} else if((numbers2[i][j-l]!=numbers2[i][j])||((numbers3[i][j-l]==1)&&(numbers2[i][j-l]==numbers2[i][j]))){
					numbers2[i][j-l+1]=numbers2[i][j];
					numberL[i][j]=l-1;
					numbers3[i][j-l]=0;
					if(l!=1){
						numbers2[i][j]=0;
					}
		}
	}
	
/*-------------------------------------------------------------------------------------------*/
	
	$("#up").click(function(){
	l=1;
	i=0;
	j=0;
	numbers3 = 		[[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0] ];
	numberL =		[[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0] ];
	show();
		
    for(i=0; i<=3; i++){
		for(j=0; j<=3; j++){
			if(numbers2[i][j]!=0){
				up();
				l=1;
			}
		}
		numbers3 = [[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0] ];

		}
		moveup();
				numberL = [[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0] ];
		addNumber();
		var akasha = setTimeout(show, 125);

			});
	
	$("#left").click(function(){
	numbers3 = [[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0] ];
	numberL = [[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0] ];
	
	l=1;
	i=0;
	j=0;
	show();
    for(i=0; i<=3; i++){
		for(j=0; j<=3; j++){
				
			if(numbers2[i][j]!=0){
				left();
				l=1;
			}
		}
		}
		moveleft();
		numberL = [[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0] ];
		addNumber();
		setTimeout(show, 125);
			});
	
	
	$("#down").click(function(){
		numbers3 = [[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0] ];
		numberL = [[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0] ];
	l=1;
	i=3;
	j=3;
	show();
    for(i=3; i>=0; i--){
		for(j=3; j>=0; j--){
			if(numbers2[i][j]!=0){
				down();
				l=1;
			}
		}
		
		}
		movedown();
		numberL = [[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0] ];
		addNumber();
		setTimeout(show, 125);
			});
	
	
	
	
	
	
    $("#right").click(function(){
		numbers3 = [[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0] ];
		numberL = [[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0] ];
	l=1;
	i=3;
	j=3;
	show();
    for(i=3; i>=0; i--){
		for(j=3; j>=0; j--){
			if(numbers2[i][j]!=0){
				right();
				l=1;
			}
		}
		}
		moveright();
		numberL = [[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0] ];
		addNumber();
		setTimeout(show, 125);
			});

show();
			
    });