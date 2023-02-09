const elem = document.getElementById('body');

createTable(elem, 10, 10);

function createTable(parent, cols, rows) {
	const table = document.createElement('table');
	
	for (let i = 0; i < rows; i++) {
		const tr = document.createElement('tr');
		
		for (let j = 0; j < cols; j++) {
			const td = document.createElement('td');
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	parent.appendChild(table);

	const allTd = document.querySelectorAll('TD');

	for (let i = 0; i < 100; i++) {
		allTd[i].innerHTML = i + 1;
	}
}

