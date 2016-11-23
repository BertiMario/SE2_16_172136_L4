
//funzione che visualizza il form
function visualizeInsert()
{
	if(document.getElementById('divForm').style.display=='none')
	{		
		//se è none lo visualizzo e pulisco i campi
		document.getElementById('inputForm').reset();
		document.getElementById('divForm').style.display='block';
	}
	else
	{
		if(document.getElementById('inputName').value=="" || document.getElementById('inputSurname').value=="" || document.getElementById('inputLevel').value=="" || document.getElementById('inputSalary').value=="")
			alert("Complete the Form");  //se si fa un submit senza prima completare i campi
		else
		{
			document.getElementById('divForm').style.display='none';  //se è visualizzato, lo nascondo
		}
	}

}

//funzione che visualizza il form
function visualize()
{
	document.getElementById('divForm').style.display='block';
	alert("pippo");
}
