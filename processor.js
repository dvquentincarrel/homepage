function gen_elem(name, link, img){
	var content= `<li><a href="${link}"><img src="${img}" width="32" height="32"><br>${name}</a></li>`;
	return content;
}

const base = document.getElementById("catalogue");

// websites come from data.js, used as a json of sorts
for(elem in websites){
	base.insertAdjacentHTML("beforeend", gen_elem(elem, websites[elem][0], websites[elem][1]));
}
