import { Modal } from './UI/Modal.js';
class PlaceFinder {
  constructor() {
    this.addressForm = document.getElementById('form');
    this.locateUserBtn = document.getElementById('locate-btn');
    this.addressForm.addEventListener('submit', this.findAddressHandler);
    this.locateUserBtn.addEventListener('click', this.locateUserHandler);
  }

  findAddressHandler() {}

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        'Location service is not present in your browser. Please, use other modern browser or use manual address ! '
      );
      return;
    }

    const modal = new Modal(
      'loading-modal-content',
      'Loading location : Please Wait ! '
    );
    modal.show();

    navigator.geolocation.getCurrentPosition(
      success => {
        modal.hide();
        const coordinates = {
          lat: success.coords.latitude,
          long: success.coords.longitude
        };
        console.log(coordinates);
      },
      error => {
        modal.hide();
        alert(
          'Unfortunately, cannot retrieve the location! Please use manual address !'
        );
      }
    );
  }
}

const placeFinder = new PlaceFinder();
