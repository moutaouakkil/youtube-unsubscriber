(async function () {
  const UNSUBSCRIBE_DELAY = 1000;

  // helper function to wait for a specified time
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // function to click the unsubscribe button
  const clickUnsubscribe = async (channel) => {
    try {
      // click the "Subscribed" button
      const subscribeButton = channel.querySelector('ytd-subscribe-button-renderer button');
      if (subscribeButton) {
        subscribeButton.click();
        await wait(UNSUBSCRIBE_DELAY);

        // click the confirmation "Unsubscribe" button
        const confirmButton = document.querySelector('yt-confirm-dialog-renderer #confirm-button button');
        if (confirmButton) {
          confirmButton.click();
          await wait(UNSUBSCRIBE_DELAY);
          console.log(`Unsubscribed from: ${channel.querySelector('#channel-title').innerText}`);
        }
      }
    } catch (error) {
      console.error('Error unsubscribing from channel:', error);
    }
  };

  // main function to iterate through channels and unsubscribe
  const unsubscribeAll = async () => {
    const channels = Array.from(document.querySelectorAll('ytd-channel-renderer'));
    for (const channel of channels) {
      await clickUnsubscribe(channel);
    }
    console.log('Unsubscription process completed.');
  };

  // execute the unsubscribe function
  unsubscribeAll();
})();
