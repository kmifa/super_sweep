(function(){

	var lay = document.getElementById("modal-overlay"),
	    wrap = document.getElementById("modal-wrap-outer"),
	    content = document.getElementById("modal-content"),
	    close = document.getElementById("modal-close"),
	    open = document.querySelectorAll(".modal-open"),
	    body = document.querySelector('body');

	function modalOpen(e){
		lay.classList.add("active");
		wrap.classList.add("active");
		body.classList.add("active");
		return false;
	}

	function modalClose(e){

		lay.classList.remove("active");
		wrap.classList.remove("active");
		body.classList.remove("active");
		return false;

	}

	// modalOpen();

	for(var i = 0; i < open.length; i++){
		open[i].addEventListener('click', modalOpen, false);
	}

	close.addEventListener('click', modalClose, false);

	
})();