/*----------  actividad imagenes  ----------*/

const items = document.querySelectorAll(".picture-group");

items.forEach((item, key) => {
	item.addEventListener("click", (event) => {
		event.preventDefault();
		items.forEach((item) => item.classList.remove("selected"));

		item.classList.add("selected", "viewed");

		// $(".app").animate(
		//   {
		//     scrollTop: item.offset().top,
		//   },
		//   200
		//   );

		verificarVistos();
	});
});

const groupWrapper = document.querySelector("#group-wrapper");

groupWrapper.addEventListener("blur", () => items.forEach((item) => item.classList.remove("selected")));

function verificarVistos() {
	let vistos = document.querySelectorAll(".viewed");

	if (vistos.length === items.length) {
		// $("#mensaje").html("Todos vistos");
	}
}
