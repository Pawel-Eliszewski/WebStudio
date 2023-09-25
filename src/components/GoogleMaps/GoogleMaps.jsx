import './GoogleMaps.css';

export const GoogleMaps = () => {
  return (
    <div className="maps__container">
      <iframe
        className="maps"
        title="Google Maps"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Aleje%20Jerozolimskie%2021,%20Warszawa+(WebStudio)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.maps.ie/population/">
          Calculate population in area
        </a>
      </iframe>
    </div>
  );
};
