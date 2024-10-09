var i = 0;

var myVar = setInterval(myTimer, 3000);

function myTimer() {

    var els = document.getElementById("grid-container").getElementsByClassName("ytd-expanded-shelf-contents-renderer");

    if (i < els.length) {

        els[i].querySelector(".ytd-subscribe-button-renderer").click();

        setTimeout(function() {

            var i = 0;

            var myVar = setInterval(myTimer, 3000);

            function myTimer() {

                var els = document.getElementById("grid-container").getElementsByClassName("ytd-expanded-shelf-contents-renderer");

                if (i < els.length) {

                    els[i].querySelector("[aria-label^='Unsubscribe from']").click();

                    setTimeout(function() {

                        var confirmButton = document.getElementById("confirm-button");
                        if (confirmButton) {
                            var button = confirmButton.querySelector("yt-button-shape button");
                            if (button) {
                                button.click();
                            }
                        }


                    }, 2000);

                    setTimeout(function() {

                        els[i].parentNode.removeChild(els[i]);

                    }, 2000);

                }

                i++;

                console.log(i + " Channels Unsubscribed\n");

                console.log(els.length + " remaining");

            }

        }, 2000);

        setTimeout(function() {

            els[i].parentNode.removeChild(els[i]);

        }, 2000);

    }

    i++;

    console.log(i + " Channels Unsubscribed\n");

    console.log(els.length + " remaining");

}
