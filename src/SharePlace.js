class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    addressForm.addEventListener("submit", this.findAddressHandler);
    locateUserBtn.addEventListener("click", this.locateUserHandler);
  }
  findAddressHandler() {
    console.log("find address handler");
  }
  locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        "Geolocation is not supported by your browser. Please enter address manually, or user another browser."
      );
      return;
    } else {
      navigator.geolocation.getCurrentPosition(
        (success) => {
          const coordinates = {
            lat: success.coords.latitude,
            lng: success.coords.longitude,
          };
          console.log(coordinates);
        },
        (error) => {
          alert(
            "Unable to get your current location. Please enter address manually, or turn on location access."
          );
        }
      );
    }
  }
}

const placeFinder = new PlaceFinder();
