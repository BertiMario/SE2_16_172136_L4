//express lib
var express = require('express');
//inspect
var util = require('util');

var bind = require('bind');

//array unidimensionale contenente il nome degli items
var employeeId = [];
//array unidimensionale contenente il nome degli items
var employeeName = [];
//array unidimensionale contenente la quantità degli items
var employeeSurname = [];
//array unidimensionale contenente il nome degli items
var employeeLevel = [];
//array unidimensionale contenente la quantità degli items
var employeeSalary = [];

//variabili da utilizzare nel template
var Id='';
var Name='';
var Surname='';
var Level='';
var Salary='';

//instantiate express
var app = express();

//cerco di importare gli script (NON FUNZIONA)
app.use('/script', express.static(__dirname + '/scripts/'));

//POST
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));


app.set('port', (process.env.PORT || 1337));

//use: for both POST and GET
app.use('/', function(request, response) 
{
    //set the headers of the responce
  
	var text = '';
	var DeleteID;
	var SearchID;

	if ( typeof request.body !== 'undefined' && request.body)
	{
        //the content of the POST receiced
		text = "request.body: " + util.inspect(request.body) + "\n";
		
        //content of the post
		
		//se la richiesta è dal form searchID
		if(typeof request.body.searchID !== 'undefined' && request.body.searchID)
		{
			SearchID = request.body.searchID;
			searchEmployee(SearchID);//funzione che cerca un employee in base all'id
		}
		else
		{   //se la richiesta è dal form deleteID
			if(typeof request.body.deleteID !== 'undefined' && request.body.deleteID)
			{
				DeleteID = request.body.deleteID;
				delEmployee(DeleteID);//funzione che cerca un elimina in base all'id
			}
			else
			{		
				//se la richiesta è dal form insertID
				if ( typeof request.body.id !== 'undefined' && request.body.id)
		            //save content of id
					Id = request.body.id;
				else 
					Id = "";
				
				if ( typeof request.body.name !== 'undefined' && request.body.name)
		            //save content of name
		    		Name = request.body.name;
				else 
					Name = "";
				
				if ( typeof request.body.surname !== 'undefined' && request.body.surname)
		            //save content of surname
		    		Surname = request.body.surname;
				else 
					Surname = "";
				
				if ( typeof request.body.level !== 'undefined' && request.body.level)
		            //save content of level
		    		Level = request.body.level;
				else 
					Level = "";
				
				if ( typeof request.body.salary !== 'undefined' && request.body.salary)
		            //save content of salary
		    		Salary = request.body.salary;
				else 
					Salary = "";
				
				addEmployee(Id,Name,Surname,Level,Salary); //funzione che aggiunge un employee
				Id='';
				Name='';
				Surname='';
				Level='';
				Salary='';
			}
		}
		
			//bind to template
			bind.toFile('tpl/home.tpl', 
			{
		        //set up parameters
		        id:Id,
				name:Name,
				surname:Surname,
				level:Level,
				salary: Salary
		    }, 
		    function(data) 
		    {
		        //write response
		        response.writeHead(200, {'Content-Type': 'text/html'});
		        response.end(data);
		    }); 
	}
	else
	{ // se non arriva il body
		text = "body undefined";
		response.writeHead(400, {'Content-Type': 'text/html'});
        response.end(text);
	}

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

 //funzione che aggiunge un employee
function addEmployee(eId,eName,eSurname,eLevel,eSalary)
{
	//verifico se esiste già
	var found = -1;
	for(i = 0; i < employeeId.length && found==-1; i++)
	{
		if(employeeId[i]==eId)
		{
			found=i;		
		}
	}
	//se esiste già lo aggiorno
	if(found!=-1)
	{
		employeeName[found]=eName;
		employeeSurname[found]=eSurname;
		employeeLevel[found]=eLevel;
		employeeSalary[found]=eSalary;
	}
	else  //altrimenti ne creo uno nuovo
	{
		employeeId.push(eId);
		employeeName.push(eName);
		employeeSurname.push(eSurname);
		employeeLevel.push(eLevel);
		employeeSalary.push(eSalary);
	}
}
//funzione che elimina un employee in base all'id
function delEmployee(eId)
{
	//verifico se esiste
	var found = -1;
	for(i = 0; i < employeeId.length && found==-1; i++)
	{
		if(employeeId[i]==eId)
		{
			found=i;		
		}
	}
	if(found!=-1) //se esiste lo elimino
	{
		employeeId.splice(found,1);
		employeeName.splice(found,1);
		employeeSurname.splice(found,1);
		employeeLevel.splice(found,1);
		employeeSalary.splice(found,1);
	}
}

//funzione che cerca un employee in base all'id
function searchEmployee(eId)
{
	//verifico se esiste
	var found = -1;
	for(i = 0; i < employeeId.length && found==-1; i++)
	{
		if(employeeId[i]==eId)
		{
			found=i;		
		}
	}
	//se esiste ne salvo i dati
	if(found!=-1)
	{
		Id=employeeId[found];
		Name=employeeName[found];
		Surname=employeeSurname[found];
		Level=employeeLevel[found];
		Salary=employeeSalary[found];
	}
}

//funzione che crea un nuovo id
function newID()
{
	var max=0;
	if(employeeId.length==0)
		max=0;
	else
	{
		for(i = 0; i < employeeId.length; i++)
		{
			if(parseInt(employeeId[i])>max)
			{
				max=parseInt(employeeId[i]);
			}
		}
	}
	return max+1;
}

















