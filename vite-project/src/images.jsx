// import './Images.css'; // Assuming this file is in the same folder
import discordbackgroundLogo from './assets/discord-background.jpg';
import discordlogowhiteLogo from './assets/discord-logo-white.jpg';
import menuiconLogo from './assets/menu-icon.jpg';

export const Images = () => {
  return (
    <>
      <img
        src={discordbackgroundLogo}
        alt="discord-background image"
        style={{
          position: 'absolute',
          bottom: '0px',
          right: '230px',  // Fixed to avoid overflow on smaller screens
          width: '650px',
          maxWidth: '100%',  // To ensure responsiveness
        }}
      />
      <img
        src={discordlogowhiteLogo}
        alt="discord-logo-white image"
        style={{
          position: 'absolute',
          top: '30px',
          left: '30px',
          width: '150px',
          maxWidth: '20%',  // Added maxWidth to handle responsiveness
        }}
      />
      <img
        src={menuiconLogo}
        alt="menu-icon image"
        style={{
          position: 'absolute',
          top: '20px',
          right: '80px',
          width: '40px',
          maxWidth: '10%',  // Ensuring the icon scales with screen size
        }}
      />
    </>
  );
};

