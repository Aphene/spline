	drawPathSpline = function(ctx,nodes) {
	
			var splinePts=[];
			for (var i=1;i<nodes.length-2;++i) {
				calcPathSpline(nodes,i,splinePts);
			}
			splinePts.push(nodes[nodes.length-2];
			splinePts.push(nodes[nodes.length-1];
				
  		    ctx.setStrokeStyle("yellow");
			ctx.beginPath();
			ctx.moveTo(splinePts[0].x,splinePts[0].y);
			for (var i=0;i<splinePts.length;++i) {
				ctx.lineTo(splinePts[i].x,lsplinePts[i].y);
			}
			ctx.stroke();
		};
		
		calcPathSpline = function(nodes,node,splinePts) {
		   var prev=node-1;
		   var next=node+1;
		   var nextNext=node+2;
		    
		   	var len=8;
	   		for (n=0;n<len;++n) {
				var pt={}; 
				var p=n/(len-1);  
		   		pt.x=$nspline(p,nodes[prev].x,
							nodes[node].x,
							nodes[next].x,
							nodes[nextNext].x);

		   		pt.y=$nspline(p,nodes[prev].y,
							nodes[node].y,
							nodes[next].y,
							nodes[nextNext].y);
							
		   		pt.z=$nspline(p,nodes[prev].z,
							nodes[node].z,
							nodes[next].z,
							nodes[nextNext].z);							
				splinePts.push(pt);
	   		}	
		};
		
		
	nspline = function(x,f0,f1,f2,f3)
	{


		var CR00 =   -0.5;
		var CR01 =    1.5;
		var CR02 =   -1.5;
		var CR03 =    0.5;
		var CR10 =    1.0;
		var CR11 =   -2.5;
		var CR12 =    2.0;
		var CR13 =   -0.5;
		var CR20 =   -0.5;
		var CR21 =    0.0;
		var CR22 =    0.5;
		var CR23 =    0.0;
		var CR30 =    0.0;
		var CR31 =    1.0;
		var CR32 =    0.0;
		var CR33 =    0.0;

		var c3 = CR00*f0 + CR01*f1 + CR02*f2 + CR03*f3;
		var c2 = CR10*f0 + CR11*f1 + CR12*f2 + CR13*f3;
		var c1 = CR20*f0 + CR21*f1 + CR22*f2 + CR23*f3;
		var c0 = CR30*f0 + CR31*f1 + CR32*f2 + CR33*f3;
		return ((c3*x + c2)*x + c1)*x + c0;
	};
	