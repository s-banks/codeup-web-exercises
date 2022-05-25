"use strict";
(function () {
	$.get("/data/blog.json").done(function (blogs) {
		$("#post").html("");
		blogs.forEach(function(blog) {
			let h1 = "<h1>" + blog.title + "</h1>";
			let content = "<p>" + blog.content + "<br>";
			let categories = "<footer>Blog Categories: " + blog.categories + "<br>";
			let date = "Date Posted: " + blog.date + "</footer></p>";
			$("#post").append(h1 + content + categories + date);
		});
	});
}())
