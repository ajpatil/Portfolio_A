const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt user to select media stream, pass to video element, then play

async function selectMediaStream() {
  try {
    //   Capturing live video content
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    //   Contains media stream data
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
    //   Something that is true when it has finished loading
  } catch (error) {
    console.log("whoops error here: " + error);
  }
}
// Anything that needs to be resolved after we complete our call will wait until the try has completed instead of just throwing an error
// Catch will log errors

// await is usually used in combo with the try/catch blocks
// await cannot be used without the async function, it has to be wrapped within it

// Onload

button.addEventListener("click", async () => {
  // Disable button
  button.disabled = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
});

selectMediaStream();
