class rope{
	constructor(body1, body2, pointA, pointB)
	{
    this.pointA=pointA
	this.pointB=pointB

	var options={
        pointA:body1,
		pointB:body2,
		pointB:{x:this.pointA, y:this.pointB}

	}
	//create rope constraint here

	}

    //create display() here 
	display()
	{
	var pointA=this.rope.pointA.position;
	var pointB=this.rope.pointB.position;
  
	strokeWeight(2);
	
	}
}
