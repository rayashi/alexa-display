import Geolocation from 'react-native-geolocation-service';

const getCurrentGeoLocation = async () => {
  return await new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject(error),
      {
        forceRequestLocation: true,
      },
    );
  });
};

export default getCurrentGeoLocation;
