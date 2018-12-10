$(document).ready(function(){
    var numbers2 = [[1, 0, 0, 0],
                    [0, 1, 0, 0],
                    [0, 0, 1, 0],
                    [0, 0, 0, 1] ];
    var i=0;
	var j=0;
    function show(){
        if(numbers2[0][0] != 0){
            $("#sell-1-1").html(numbers2[0][0]);
        }else{
            $("#sell-1-1").html(" ");
        }
        
        if(numbers2[0][1] != 0){
            $("#sell-1-2").html(numbers2[0][1]);
        }else{
            $("#sell-1-2").html(" ");
        }
        
        if(numbers2[0][2] !=0){
            $("#sell-1-3").html(numbers2[0][2]);
        }else{
            $("#sell-1-3").html(" ");
        }
        
        if(numbers2[0][3] != 0){
            $("#sell-1-4").html(numbers2[0][3]);
        }else{
            $("#sell-1-4").html(" ");
        }

        if (numbers2[1][0] != 0){
            $("#sell-2-1").html(numbers2[1][0]);
        }else{
            $("#sell-2-1").html(" ");
        }
        
        if(numbers2[1][1]!= 0){
            $("#sell-2-2").html(numbers2[1][1]);
        }else{
            $("#sell-2-2").html(" ");
        }
        
        if(numbers2[1][2]!= 0){
            $("#sell-2-3").html(numbers2[1][2]);
        }else{
            $("#sell-2-3").html(" ");
        }
        
        if(numbers2[1][3] != 0){
            $("#sell-2-4").html(numbers2[1][3]);
        }else{
            $("#sell-2-4").html(" ");
        }

        if(numbers2[2][0] != 0){
            $("#sell-3-1").html(numbers2[2][0]);
        }else{
            $("#sell-3-1").html(" ");
        }
        
        if(numbers2[2][1] != 0){
            $("#sell-3-2").html(numbers2[2][1]);
        }else{
            $("#sell-3-2").html(" ");
        }
        
        if(numbers2[2][2] != 0){
            $("#sell-3-3").html(numbers2[2][2]);
        }else{
            $("#sell-3-3").html(" ");
        }
        
        if(numbers2[2][3] != 0){
            $("#sell-3-4").html(numbers2[2][3]);
        }else{
            $("#sell-3-4").html(" ");
        }

        
        if(numbers2[3][0] != 0){
            $("#sell-4-1").html(numbers2[3][0]);
        }else{
            $("#sell-4-1").html(" ");
        }
        
        if(numbers2[3][1] != 0){
            $("#sell-4-2").html(numbers2[3][1]);
        }else{
            $("#sell-4-2").html(" ");
        }
        
        if(numbers2[3][2] != 0){
            $("#sell-4-3").html(numbers2[3][2]);
        }else{
            $("#sell-4-3").html(" ");
        }
        
        if(numbers2[3][3] != 0){
            $("#sell-4-4").html(numbers2[3][3]);
        }else{
            $("#sell-4-4").html(" ");
        }
    }
	
	function up(){
		if(i-l<0){
			numbers2[0][j]=numbers2[i][j]; <!--Чтобы не сдвинуть за край-->
		}
		if(numbers2[i-l][j]==0){
			l++;
			up();
		} else if(numbers2[i-l][j]==numbers2[i][j]){
			numbers2[i][j]=0;
			numbers2[i-l][j]*=2;
		} else if(numbers2[i-l][j]!=numbers2[i][j]){
			numbers2[i-l+1][j]=numbers2[i][j];
		} else{
			return;
		}
	}

    show();

    $("#up").click(function(){
		l=1;
		i=0;
		j=0;
		show();
        while( i<=3;){
            while(j<=3;){
				alert(numbers2[i][j]);
				 j++;
				}
			 i++;
			}
		show();
			});
			
    });