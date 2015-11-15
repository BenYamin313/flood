import React from 'react';

const _icons = {
  active: <path d="M25.7,25.7H13v17.4H2.6L19.3,60L36,43.1H25.7V25.7z M40.7,0L24,16.9h10.3v17.4H47V16.9h10.3L40.7,0z"/>,
  add: <path d="M53.7 25.3h-19v-19h-9.4v19h-19v9.4h19v19h9.4v-19h19"/>,
  addMini: <polygon points="8,3.5 4.5,3.5 4.5,0 3.5,0 3.5,3.5 0,3.5 0,4.5 3.5,4.5 3.5,8 4.5,8 4.5,4.5 8,4.5"/>,
  all: <polygon points="52,20.6 48.6,14.7 33.4,24 33.4,8.7 26.6,8.7 26.6,24 11.4,14.7 8,20.6 23.4,30 8,39.4 11.4,45.3 26.6,36 26.6,51.3 33.4,51.3 33.4,36 48.6,45.3 52,39.4 36.6,30 "/>,
  completed: <polygon points="55.5,18.6 46.1,8.7 24.4,31.5 13.9,20.4 4.5,30.3 24.4,51.3 24.4,51.3 24.4,51.3"/>,
  download:
    <g>
      <rect x="28.2" width="3.7" height="55.5"/>
      <polygon points="30,60 11.8,32.7 14.9,30.7 30,53.3 45.1,30.7 48.2,32.7 "/>
    </g>,
  downloadSmall:
    <path d="M55.9,39.1l-8.8-6.4h-5.4l9.4,7.8h-9.8c-0.3,0-0.5,0.2-0.7,0.4l-2.3,6.7H21.7l-2.3-6.7
      c-0.1-0.2-0.4-0.4-0.7-0.4H8.9l9.4-7.8h-5.4l-8.8,6.4C2.8,40,2,41.9,2.4,43.5l1.6,9.2c0.4,1.5,1.9,2.8,3.5,2.8h45.2
      c1.6,0,3.1-1.3,3.5-2.8l1.6-9.2C58,41.9,57.2,40,55.9,39.1z M44.4,20.1h-8.9V4.5h-11v15.6h-8.9L30,34.5L44.4,20.1z"/>,
  dotsMini: <g>
      <circle cx="0.9" cy="4" r="0.9"/>
      <circle cx="4" cy="4" r="0.9"/>
      <circle cx="7.1" cy="4" r="0.9"/>
    </g>,
  error: <path d="M34.3,51.3h-8.5v-9h8.5V51.3z M34.3,36.4h-8.5L23.6,8.7h12.7L34.3,36.4z"/>,
  inactive: <path d="M56,52H42l-9.7-12.5l-11,4.8L13,20.7l-7,4l-2-9.9L17.2,8l9.5,24.4l9.6-4.3l10.9,15.4H56V52z"/>,
  limits:
    <g>
      <path className="limits__bars--bottom" d="M24.4,48.5c0,3.3,2.5,6,5.6,6s5.6-2.7,5.6-6V18.6H24.4V48.5z M4.4,48.2c0,3.5,2.5,6.3,5.6,6.3 s5.6-2.8,5.6-6.3v-9.3H4.4V48.2z M44.4,30v18.2c0,3.5,2.5,6.3,5.6,6.3s5.6-2.8,5.6-6.3V30H44.4z"/>
      <path className="limits__bars--top" d="M24.4,18.7v-7.6c0-3.1,2.5-5.5,5.6-5.5s5.6,2.5,5.6,5.5v7.6H24.4z"/>
      <path className="limits__bars--top" d="M4.4,38.9v-27c0-3.5,2.5-6.3,5.6-6.3s5.6,2.8,5.6,6.3v27H4.4z"/>
      <path className="limits__bars--top" d="M44.4,29.9V11.8c0-3.5,2.5-6.3,5.6-6.3s5.6,2.8,5.6,6.3v18.1H44.4z"/>
      <path className="limits__bars--middle" d="M22.2,16.4h15.6c1.2,0,2.2,1,2.2,2.2c0,1.2-1,2.2-2.2,2.2H22.2c-1.2,0-2.2-1-2.2-2.2 C20,17.4,21,16.4,22.2,16.4z"/>
      <path className="limits__bars--middle" d="M2.2,36.7h15.6c1.2,0,2.2,1,2.2,2.2c0,1.2-1,2.2-2.2,2.2H2.2c-1.2,0-2.2-1-2.2-2.2C0,37.7,1,36.7,2.2,36.7z"/>
      <path className="limits__bars--middle" d="M42.2,27.8h15.6c1.2,0,2.2,1,2.2,2.2s-1,2.2-2.2,2.2H42.2c-1.2,0-2.2-1-2.2-2.2S41,27.8,42.2,27.8z"/>
    </g>,
  pause: <path d="M13.5 51h11V9h-11v42zm22-42v42h11V9h-11z"/>,
  removeMini: <rect y="3.5" width="8" height="1"/>,
  search:
    <g>
      <path d="M26,38.9c-7.1,0-12.8-5.8-12.8-12.8C13.2,19,19,13.2,26,13.2c7.1,0,12.8,5.8,12.8,12.8 C38.9,33.1,33.1,38.9,26,38.9z M26,18.2c-4.3,0-7.8,3.5-7.8,7.8s3.5,7.8,7.8,7.8s7.8-3.5,7.8-7.8S30.4,18.2,26,18.2z"/>
      <rect x="30.9" y="36.7" transform="matrix(0.7071 0.7071 -0.7071 0.7071 39.1863 -16.2315)" width="16.5" height="5"/>
    </g>,
  start: <path d="M13.1 9.5L46.9 30 13.1 50.5v-41z"/>,
  stop: <path d="M11.9 11.9H48v36.2H11.9V11.9z"/>,
  upload:
    <g>
      <rect x="28.2" y="4.5" width="3.7" height="55.5"/>
      <polygon points="30,0 48.2,27.3 45.1,29.3 30,6.7 14.9,29.3 11.8,27.3 "/>
    </g>
};

export default class Icon extends React.Component {

  constructor() {
    super();
  }

  render() {
    let className = 'icon icon--' + this.props.icon;
    let icon = _icons[this.props.icon];
    let viewBox = '0 0 60 60';

    if (this.props.size && this.props.size === 'mini') {
      viewBox = '0 0 8 8';
    }

    return (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
        {icon}
      </svg>
    );
  }

}
