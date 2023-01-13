import { EIconColor } from './Icon.enums';

const Svg = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.8982 17.3609L19.1136 22.222L14.8982 17.3609ZM17.0059 11.2845C17.0059 15.9828 13.7031 19.7915 9.6289 19.7915C5.55473 19.7915 2.25195 15.9828 2.25195 11.2845C2.25195 6.58628 5.55473 2.77759 9.6289 2.77759C13.7031 2.77759 17.0059 6.58628 17.0059 11.2845Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export default Svg;
