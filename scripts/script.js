const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
   
for(let i = 1;i <= 100;i++) {		
				const div = document.createElement("div");
				div.classList.add("box");
				container.appendChild(div);
}

function ColorHexaCode() {
				var chars = "0123456789abcdef";
				var colorLength = 6;
				var color = "";

				for(var i = 0; i < colorLength;i++) {							
								const colorMode = Math.floor(Math.random() * chars.length);
								color += chars.substring(colorMode,colorMode+1);
				}
				return "#"+color;
}

const boxColor = document.querySelectorAll(".box");
btn.addEventListener("click", function() {		
				boxColor.forEach(item => {						
								const HexaCode = ColorHexaCode();
								item.style.backgroundColor = HexaCode;
								item.innerHTML = HexaCode;
								item.style.textAlign = "center";
								item.style.fontWeight = "bold";				
				});
})