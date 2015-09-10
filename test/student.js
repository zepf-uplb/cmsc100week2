var should = require('should-http'),
    request = require('supertest');

describe("student",function(){
	var url = "localhost:5000";
	describe("find()",function(){
		it("should retrieve all student records",function(done){
		    request(url).get('/students').end(function(err,res){
		        if(err)throw err;
		        res.should.have.status(200);
		        res.body.should.be.an.instanceOf(Array);
		        done();
	    	    });//end
	    	});//it
	    });//describe
	    
    describe("insert()",function(){
		it("return newly created record",function(done){
		    request(url).post('/students').send({'studno':'2013-12345','name':'Betel'}).end(function(err,res){
		        if(err)throw err;
		        res.should.have.status(200);
                res.body.should.be.an.instanceOf(Object);
             	res.body.should.have.properties(['id','studno','name']);	
            	 //res.body.should.have.properties(['affectedRows','changedRows','fieldCount']);		       
		        done();
	    	    });//end
	    	});//it
	    });//describe	    
    });//describe	
