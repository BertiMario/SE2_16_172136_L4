<!DOCTYPE html>
<html>
<head>
	
</head>
<body>
<h3>//ci ho provato in tutti i modi ma non riesco ad importare gli script</h3>
<h3>//insert delete search funzionano, non vanno gli script "locali" per l'hide del form e il comtrollo campi </h3>

<div id="divForm" style='display:block'>
	<br>
	<br>
	<table>
		<tr>
			<th>ID</th><th>Name</th><th>Surname</th><th>Level</th><th>Salary</th>
		</tr>
		<tr>
		<!-- form per l'inserimento dei dati -->
			<form id="inputForm" action="http://127.0.0.1:1337/" method="post"> 
			 <td> <input type="text" name="id" value="(:id:)" id="inputID" size="10"></td>
			 <td> <input type="text" name="name" value="(:name:)" id="inputName"></td>
			 <td> <input type="text" name="surname" value="(:surname:)" id="inputSurname"></td>
			 <td> <input type="text" name="level" value="(:level:)" id="inputLevel" size="10"</td>
			 <td> <input type="text" name="salary" value="(:salary:)" id="inputSalary" size="10"></td>
		</tr>
		<tr> 	 <td>Insert New:</td></tr>
		
		<tr>	<td> <input type="button" value="InsertNew" onclick="submit()"> </td>
			</form>
		</tr>
	</table>
</div>

<div id="divSearchForm" style='display:block'>
	
	<!-- form per la ricerca dell'employee -->
	<form id="searchForm" action="http://127.0.0.1:1337/" method="post"> 
	  <br><br>	 
	  Search (ID Input):<br>
	  <input type="text" name="searchID" value="" id="searchID" size="10">
	  <input type="button" value="Search" onclick="submit()"> 
	  <br><br>
	</form>
	<!-- form per la cancellazione dell'employe -->
	<form id="deleteForm" action="http://127.0.0.1:1337/" method="post"> 
	  Delete (ID Input):<br>
	  <input type="text" name="deleteID" value="" id="ItemInput" size="10">
	  <input type="button" value="Delete" onclick="submit()"> 	 
	</form>
</div>
<!-- importo lo script (NON FUNZIONA) -->
<script src="../scripts/script.js"></script> 
</body>
</html>