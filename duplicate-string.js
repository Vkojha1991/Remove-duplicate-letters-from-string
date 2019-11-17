function removeDuplicate(str1, str2) {
					var new_str = str1.concat(str2).toLowerCase();
					var break_str = new_str.split('');
					var filterArray = Array.from(new Set(break_str))
					var accending = filterArray.sort();
					var result = accending.join('');
					return result;
				}
				var y = removeDuplicate("Anil", "Amit");
				var z = removeDuplicate("Monisha", "Saloni");
				console.log(y, z);
