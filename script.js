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

function Filterer() {
	var i;
	filterUndo();
	Search();
	classFilter();
	for (i = 1; i < 7; i++) {
		Filter(i);
	}
}

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


function filterUndo() {
	var table, tr, i;
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	
	for (i = 0; i < tr.length; i++) {
		tr[i].style.display = "";
	}
}

function sortTable(){
	
	var table, rows, switching, i, x, y, pivotPoint, pivot;
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	quickSort(tr, 1, tr.length - 1);
}

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

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
/*function levelFilter() {
	var levelSearch = document.getElementById("levelSearch");
    var check = levelSearch.options[levelSearch.selectedIndex].value;
	table = document.getElementById("myTable");
	var tr = table.getElementsByTagName("tr");
	var td = tr[1].getElementsByTagName("td")[1];
	document.write(td.innerHTML);
}*/
