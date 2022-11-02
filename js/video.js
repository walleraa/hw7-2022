var video;

//Event listener that goes off when the window loads
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

//Just quick function to update volume
//Used in play and slider
function updateVolume(){
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%'
	console.log(video.volume);
};

//Event listener that goes off when the play button is clicked
//Plays the video
//Adjusts the volume to the value of the slider
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	updateVolume();
});

//Event listener that goes off when the pause button is clicked
//Pauses the video
document.querySelector('#pause').addEventListener("click", 
	() => {
		console.log("Pause Video");
		video.pause();
	}
);

//Event listener that goes off when the slow down button is clicked
//Slows down the video playback rate by 10%
document.querySelector('#slower').addEventListener('click',
	() => {
		console.log("Slow down");
		//This if statement is just to prevent console from throwing an error for going too slow
		if (video.playbackRate >= .2)
			video.playbackRate -= .1;
		else
			console.log("Video is too slow to slow even more");
		console.log("Video playback rate is now " + video.playbackRate);
	}
);

//Event listener that goes off when the speed up button is clicked
//Speeds up the video playback rate by 10%
document.querySelector('#faster').addEventListener('click',
	() => {
		console.log("Speed up");
		//This if statement is just to prevent console from throwing an error for going too fast
		if (video.playbackRate <= 16)
			video.playbackRate += .1;
		else
			console.log("Video is too fast to be sped up");
		console.log("Video playback rate is now "+ video.playbackRate);
	}
);

//Event listener that goes off when the skip ahead button is clicked
//Advances the video by 10 seconds (or resets to the start of the video)
document.querySelector('#skip').addEventListener('click',
	() => {
		console.log("Skip ahead");
		if (video.currentTime + 10 > video.duration) {
			console.log("Resetting to the start");
			video.currentTime = 0;
		}
		else {
			console.log("Skipping ahead 10 seconds");
			video.currentTime += 10;
		}
		console.log(video.currentTime);
		// console.log(video.duration);
	}	
);

//Event listener that goes off when the mute button is clicked
//Mutes or unmutes the video
//Updates text of button
document.querySelector('#mute').addEventListener('click',
	() => {
		console.log("Mute");
		if (video.muted)
			document.querySelector('#mute').innerHTML = "Mute";
		else
			document.querySelector('#mute').innerHTML = "Unmute";
		video.muted = !video.muted
		console.log("Video is now muted: " + video.muted)
	}
);

//Event listener that goes off when the volume slider is clicked
//Updates the volume for the video and the volume displayed
document.querySelector('#slider').addEventListener('click',
	() => {
		console.log("Volume slider adjusted");
		video.volume = document.querySelector('#slider').value/100;
		updateVolume();
	}
);

//Event listener that goes off when the old school button is clicked
//Adds the old school class to the video element (if it isn't already there)
document.querySelector('#vintage').addEventListener('click',
	() => {
		console.log("Old School");
		if (video.className == "video") {
			video.className += 'oldSchool';
			console.log("Updated Video's classes")
		}
		console.log("Video's classes are now " + video.className);
	}
);

//Event listener that goes off when the original button is clicked
//Removes the old school class to the video element (if it was there)
document.querySelector('#orig').addEventListener('click',
	() => {
		console.log("Original");
		video.className = "video";
		console.log("Video's class is now " + video.className);
	}
);

//Practice in discussion to add an event listener for when a button is hovered over
// document.querySelector('#pause').addEventListener("mouseover", 
// 	() => {
// 		console.log("HOVER");
// 	}
// );
