"use strict";
console.log("JavaScript running!...");

if ("serviceWorker" in navigator) {
	window.addEventListener("load", () =>
		navigator.serviceWorker
			.register("./sw.js")
			.then((registration) => console.log("Service Worker registered..."))
			.catch((err) => "SW registration failed"),
	);
}

const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggle.addEventListener("click", () => {
	toggle.classList.toggle("active");
	navigation.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
	//window.location = "blogs.html";
	const container = document.getElementById("container");
	const loading = document.querySelector(".loading");

	getPost();
	getPost();
	getPost();

	window.addEventListener("scroll", () => {
		const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

		//console.log({ scrollTop, scrollHeight, clientHeight });

		if (clientHeight + scrollTop >= scrollHeight - 5) {
			// show the loading animation
			showLoading();
		}
	});

	function showLoading() {
		loading.classList.add("show");

		// load more data
		setTimeout(getPost, 1000);
	}

	async function getPost() {
		const postResponse = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${getRandomNr()}`,
		);
		const postData = await postResponse.json();

		const userResponse = await fetch("https://randomuser.me/api");
		const userData = await userResponse.json();

		const data = { post: postData, user: userData.results[0] };

		addDataToDOM(data);
	}

	function getRandomNr() {
		return Math.floor(Math.random() * 100) + 1;
	}

	function addDataToDOM(data) {
		const postElement = document.createElement("div");
		postElement.classList.add("blog-post");
		postElement.innerHTML = `
		<h2 class="title">${data.post.title}</h2>
		<p class="text">${data.post.body}</p>
		<div class="user-info">
			<img src="${data.user.picture.large}" alt="${data.user.name.first}" />
			<span>${data.user.name.first} ${data.user.name.last}</span>
		</div>
	`;
		container.appendChild(postElement);

		loading.classList.remove("show");
	}
});

const contactform = document.getElementById("contactForm");
//const subscribeform = document.getElementById("subscribeForm");

const API_URL =
	window.location.hostname === "127.0.0.1" ||
	window.location.hostname === "localhost"
		? "http://localhost:5000"
		: "https://rancko-solutions-api.herokuapp.com";

if (contactform) {
	contactform.addEventListener("submit", (event) => {
		event.preventDefault();
		const formData = new FormData(contactform);
		const firstname = formData.get("fname");
		const lastname = formData.get("lname");
		const email = formData.get("email");
		const subject = formData.get("subject");
		const message = formData.get("message");

		if (!firstname || !lastname || !email || !subject || !message) {
			alert("Please fill the entire form to send the message...");
		} else {
			const newContact = {
				firstname,
				lastname,
				email,
				subject,
				message,
			};

			console.log(newContact);

			fetch(`${API_URL}/api/v1/contacts`, {
				method: "POST",
				body: JSON.stringify(newContact),
				headers: {
					"content-type": "application/json",
				},
			})
				.then((response) => {
					if (!response.ok) {
						const contentType = response.headers.get("content-type");
						if (contentType.includes("json")) {
							return response
								.json()
								.then((error) => Promise.reject(error.message));
						} else {
							return response.text().then((message) => Promise.reject(message));
						}
					}
				})
				.catch((error) => {
					console.log(error.message);
				});
			contactform.reset();
			alert(
				`Thanks ${name} for your message. You'll be contacted through your email!...`,
			);
		}
	});
}

// if (subscribeform) {
// 	subscribeform.addEventListener("submit", (event) => {
// 		event.preventDefault();
// 		const formData = new FormData(subscribeform);
// 		const name = formData.get("name");
// 		const email = formData.get("subscriberEmail");

// 		if (!name || !email) {
// 			alert("Please enter your name and email to subscribe...");
// 		} else {
// 			const newSubscriber = {
// 				name,
// 				email,
// 			};

// 			console.log(newSubscriber);

// 			fetch(`${API_URL}/api/subscribers`, {
// 				method: "POST",
// 				body: JSON.stringify(newSubscriber),
// 				headers: {
// 					"content-type": "application/json",
// 				},
// 			})
// 				.then((response) => {
// 					if (!response.ok) {
// 						const contentType = response.headers.get("content-type");
// 						if (contentType.includes("json")) {
// 							return response
// 								.json()
// 								.then((error) => Promise.reject(error.message));
// 						} else {
// 							return response.text().then((message) => Promise.reject(message));
// 						}
// 					}
// 				})
// 				.catch((error) => {
// 					console.log(error.message);
// 				});
// 			subscribeform.reset();
// 			alert(`Thanks ${name} for subscribing!...`);
// 		}
// 	});
// }
