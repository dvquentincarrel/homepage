function gen_elem(name, link, img){
	var content= `<li><a href="${link}"><img src="${img}" width="32" height="32"><br>${name}</a></li>`;
	return content;
}

const base = document.getElementById("catalogue");
// Absolutly lmaoing at this. stacked async functions, one of them
// being for json parsing ? really ?
fetch('data.json')
	.then(
		(value) => value.json())
	.then(
		(jsn) => {
			for (elem in jsn){
				base.insertAdjacentHTML("beforeend", gen_elem(elem, jsn[elem][0], jsn[elem][1]));
			}
		}
	);


