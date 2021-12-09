	let input = document.querySelector('.input');
	let list = document.querySelector('.ul');
	let listElements = document.querySelectorAll('.element');
	let inputLabel = document.querySelector(".inputFieldLabel");

	input.oninput = function() {
		let value = this.value.trim();
		let matchQuantity = 0;
			if(value.length > 0){
			 listElements.forEach(elem => {
					if(elem.innerText.search(value) == -1)
						elem.style.display = "none"
					else{
						elem.style.display = "block";
						matchQuantity++;
					}
			  });
			  if(matchQuantity > 0){
				  inputLabel.innerText= "";
			  }else{
				inputLabel.innerText = "Не найдено";
			  }

			}else{
				listElements.forEach(elem => {
					elem.style.display = "block";
			});
		}
	};

	document.addEventListener('click', (e) => {
		if(!e.target.classList.contains('element') && !e.target.classList.contains('input')){
			input.value = "";
			for(let i = 0; i < listElements.length; i++)
				listElements[i].style.display = "none";
		}	else{
			for(let i = 0; i < listElements.length; i++)
				listElements[i].style.display = "block";
		}
	})
	list.addEventListener('click', (e) => {
		input.value = e.target.textContent;
	})


