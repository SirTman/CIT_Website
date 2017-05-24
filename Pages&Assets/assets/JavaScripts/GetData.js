function writeTextFile()
{
	var FirstName = document.getElementById("FirstName").value;
	var LastName = document.getElementById("LastName").value;
	var PostAdrs = document.getElementById("LastName").value;

	var WholeForm = document.getElementById("Buyform").value;

	var txtFile = "InputedInfo.txt";
	var file = new File(txtFile);
	var str = "My string of text";

	file.open("w"); // open file with write access
	file.write(WholeForm);
	file.close();
}