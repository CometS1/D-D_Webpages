//Searches through the table based on the text inputted
function Search() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

//Filters the tables based on the selected, 7 checks for all the selectors
function Filterer() {
	var i;
	filterUndo();
	Search();
	classFilter();
	for (i = 1; i < 7; i++) {
		Filter(i);
	}
}

//Runs the filter based on the number
function Filter(num) {
  var table, tr, td, i, search, check;
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  switch(num){
	  case 1:
		search = document.getElementById("levelSearch");
	break;
	case 2:
		search = document.getElementById("schoolSearch");
	break;
	case 3:
		search = document.getElementById("castingSearch");
	break;
	case 4:
		search = document.getElementById("ritualSearch");
	break;
	case 5:
		search = document.getElementById("concentrationSearch");
	break;
	case 6:
		search = document.getElementById("sourceSearch");
	break;
  }
  check = search.options[search.selectedIndex].value;
  if (check != "NA"){
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[num];
		if (td) {
			if (td.innerHTML != check) {
				tr[i].style.display = "none";
			}
		}       
	}
  }
}

//Filters the class
function classFilter() {
  var table, tr, td, i, classSearch, check;
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  classSearch = document.getElementById("classSearch");
  check = classSearch.options[classSearch.selectedIndex].value;
  if (check != "NA"){
	for (i = 0; i < tr.length; i++) {
			if (tr[i].className.indexOf(check) <= -1) {
				tr[i].style.display = "none";
			}
		       
	}
  }
}

//Clears the filter
function filterUndo() {
	var table, tr, i;
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	
	for (i = 0; i < tr.length; i++) {
		tr[i].style.display = "";
	}
}

//Activates the quickSort function on the table
function sortTable(){
	
	var table, rows, switching, i, x, y, pivotPoint, pivot;
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	quickSort(tr, 1, tr.length - 1);
}

//Sorts the table alphabetically
function quickSort(tr, left, right){
	var pivot, partitionIndex;
	
	if(left < right){
    pivot = right;
    partitionIndex = partition(tr, pivot, left, right);
	
	quickSort(tr, left, partitionIndex - 1);
   quickSort(tr, partitionIndex + 1, right);
	}
}

function partition(tr, pivot, left, right){
       partitionIndex = left;
   for(var i = left; i < right; i++){
    if(tr[i].innerHTML.toLowerCase().trim() < tr[pivot].innerHTML.toLowerCase().trim()){
      swap(tr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(tr, right, partitionIndex);
  return partitionIndex;
}

function swap(tr, i, j){
	tr[i].parentNode.insertBefore(tr[j], tr[i]);
	tr[j].parentNode.insertBefore(tr[i], tr[j]);
}

//Puts the spell data into the modal after being clicked
$(document).ready(function(){
	$("tr").click(function(){
	var clicked = this.getElementsByTagName("td")[0].innerHTML.trim();
	
		$("#myModal").modal();
		
		var modalTitle = '<h4>' + clicked + '</h4>';
		
		$(".modal-header").append(modalTitle);
		clicked = clicked.replace(/[^a-z0-9\s]/gi, '');
		
		$(".modal-header").append(spell_data[clicked][0]);
		$(".modal-header").append("<br>Casting Time: <strong>" +spell_data[clicked][1]+"</strong>");
		$(".modal-header").append("<br>Range: <strong>" +spell_data[clicked][2]+"</strong>");
		$(".modal-header").append("<br>Components: <strong>" +spell_data[clicked][3]+"</strong>");
		$(".modal-header").append("<br>Duration: <strong>" +spell_data[clicked][4]+"</strong>");
		$(".modal-body").append(spell_data[clicked][5]);
		$(".modal-footer").append(spell_data[clicked][6]);
		$(".modal-footer").append("	&#160;<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>");
	});
});

//Clears the modal once it is hidden to be used for other data
$(document).ready(function(){
	$('#myModal').on('hidden.bs.modal', function () {
		$(".modal-header").html("");
		$(".modal-body").html("");
		$(".modal-footer").html("");
	})
});

/*document.getElementById('myInput').onkeydown = function(event) {
    if (event.keyCode == 13) {
        alert('A');
    }
}*/
