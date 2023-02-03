let chars = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_-+={[}]|:;'<,>.?/`;


let textarea = document.querySelector(".generator__input--textarea");
let button = document.querySelector(".generator__button--btn");
let copyButton = document.querySelector(".input__copy");

button.addEventListener('click', function () {
	let randomPassword = "";
	let amountChars = Math.round(Math.random() * 20) + 5;
	for (let i = 0; i < amountChars; i++) {
		randomPassword += chars.charAt(
			Math.floor(Math.random() * chars.length)
		);
	}
	textarea.innerHTML = randomPassword;
})

copyButton.addEventListener('click', function () {
	textarea.select()
	textarea.setSelectionRange(0, 99999) //For mobile

	navigator.clipboard.writeText(textarea.value)

	copyButton.style.backgroundImage = "url(../svg/check-icon.svg)";
	setTimeout(() => copyButton.style.backgroundImage = "url(../svg/copy-icon.svg)", 2000)

})



