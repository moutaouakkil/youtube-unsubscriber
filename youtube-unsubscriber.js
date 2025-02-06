let unsubedItems = 0;
let confirmButtonIntervalTime = 500;
let intevalTime = 1000; // This should not be lower than confirmButtonIntervalTime
const interval = setInterval(unsubscribe_load, intevalTime);

function unsubscribe_load() {
  const chanels = document
    .getElementById("grid-container")
    .getElementsByClassName("ytd-expanded-shelf-contents-renderer");

  if (unsubedItems < chanels.length) {
    chanels[unsubedItems].querySelector(".ytd-subscribe-button-renderer").click();
        
        if (unsubedItems < chanels.length) {
          console.log(chanels[unsubedItems].getElementsByClassName("ytd-channel-name")[0].innerText);
          const unsubscribeButton = chanels[unsubedItems].querySelector("[aria-label^='Unsubscribe from']");
          if(unsubscribeButton){
            unsubscribeButton.click();
          }
          
          setTimeout(function () {
            const confirmButton = document.getElementById("confirm-button");
            if (confirmButton) {
              const button = confirmButton.querySelector(
                "yt-button-shape button"
              );
              if (button) {
                button.click();
              }
            }
          }, confirmButtonIntervalTime);
        }
  }
  unsubedItems++;
  console.log(unsubedItems + " Channels Unsubscribed\n");
  console.log(chanels.length + " remaining");
}
