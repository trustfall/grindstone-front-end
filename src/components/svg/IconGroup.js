import React from 'react';
import styled from 'styled-components';

const IconGroup = () =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 198 198"
  >
    <path
      fill-rule="evenodd"
      d="M189,180 C193.967,180 198,184.0328 198,189 C198,193.9672 193.967,198 189,198 C184.033,198 180,193.9672 180,189 C180,184.0328 184.033,180 189,180 Z M153,180 C157.967,180 162,184.0328 162,189 C162,193.9672 157.967,198 153,198 C148.033,198 144,193.9672 144,189 C144,184.0328 148.033,180 153,180 Z M117,180 C121.967,180 126,184.0328 126,189 C126,193.9672 121.967,198 117,198 C112.033,198 108,193.9672 108,189 C108,184.0328 112.033,180 117,180 Z M81,180 C85.9672,180 90,184.0328 90,189 C90,193.9672 85.9672,198 81,198 C76.0328,198 72,193.9672 72,189 C72,184.0328 76.0328,180 81,180 Z M45,180 C49.9672,180 54,184.0328 54,189 C54,193.9672 49.9672,198 45,198 C40.0328,198 36,193.9672 36,189 C36,184.0328 40.0328,180 45,180 Z M9,180 C13.9672,180 18,184.0328 18,189 C18,193.9672 13.9672,198 9,198 C4.0328,198 0,193.9672 0,189 C0,184.0328 4.0328,180 9,180 Z M189,144 C193.967,144 198,148.0328 198,153 C198,157.9672 193.967,162 189,162 C184.033,162 180,157.9672 180,153 C180,148.0328 184.033,144 189,144 Z M9,144 C13.9672,144 18,148.0328 18,153 C18,157.9672 13.9672,162 9,162 C4.0328,162 0,157.9672 0,153 C0,148.0328 4.0328,144 9,144 Z M153,162 L45,162 C42.06,162 39.4473,160.5872 37.8045,158.4041 C36.6717,156.8988 36,155.0272 36,153 L36,117 C36,114.9728 36.6717,113.1012 37.8045,111.5959 C39.4473,109.4128 42.06,108 45,108 L153,108 C155.94,108 158.553,109.4128 160.195,111.5959 C161.328,113.1012 162,114.9728 162,117 L162,153 C162,155.0272 161.328,156.8988 160.195,158.4041 C158.553,160.5871 155.94,161.9998 153,162 Z M54,144 L144,144 L144,126 L54,126 L54,144 Z M189,108 C193.967,108 198,112.0328 198,117 C198,121.9672 193.967,126 189,126 C184.033,126 180,121.9672 180,117 C180,112.0328 184.033,108 189,108 Z M9,108 C13.9672,108 18,112.0328 18,117 C18,121.9672 13.9672,126 9,126 C4.0328,126 0,121.9672 0,117 C0,112.0328 4.0328,108 9,108 Z M189,72 C193.967,72 198,76.033 198,81 C198,85.967 193.967,90 189,90 C184.033,90 180,85.967 180,81 C180,76.033 184.033,72 189,72 Z M9,72 C13.9672,72 18,76.033 18,81 C18,85.967 13.9672,90 9,90 C4.0328,90 0,85.967 0,81 C0,76.033 4.0328,72 9,72 Z M153,90 L45,90 C42.06,90 39.4473,88.587 37.8045,86.404 C36.6717,84.899 36,83.027 36,81 L36,45 C36,42.973 36.6717,41.101 37.8045,39.596 C39.4473,37.413 42.06,36 45,36 L153,36 C155.94,36 158.553,37.413 160.195,39.596 C161.328,41.101 162,42.973 162,45 L162,81 C162,83.027 161.328,84.899 160.195,86.404 C158.553,88.587 155.94,90 153,90 Z M54,72 L144,72 L144,54 L54,54 L54,72 Z M189,36 C193.967,36 198,40.033 198,45 C198,49.967 193.967,54 189,54 C184.033,54 180,49.967 180,45 C180,40.033 184.033,36 189,36 Z M9,36 C13.9672,36 18,40.033 18,45 C18,49.967 13.9672,54 9,54 C4.0328,54 0,49.967 0,45 C0,40.033 4.0328,36 9,36 Z M9,0 C13.9672,0 18,4.033 18,9 C18,13.967 13.9672,18 9,18 C4.0328,18 0,13.967 0,9 C0,4.033 4.0328,0 9,0 Z M45,0 C49.9672,0 54,4.033 54,9 C54,13.967 49.9672,18 45,18 C40.0328,18 36,13.967 36,9 C36,4.033 40.0328,0 45,0 Z M81,0 C85.9672,0 90,4.033 90,9 C90,13.967 85.9672,18 81,18 C76.0328,18 72,13.967 72,9 C72,4.033 76.0328,0 81,0 Z M117,0 C121.967,0 126,4.033 126,9 C126,13.967 121.967,18 117,18 C112.033,18 108,13.967 108,9 C108,4.033 112.033,0 117,0 Z M153,0 C157.967,0 162,4.033 162,9 C162,13.967 157.967,18 153,18 C148.033,18 144,13.967 144,9 C144,4.033 148.033,0 153,0 Z M189,0 C193.967,0 198,4.033 198,9 C198,13.967 193.967,18 189,18 C184.033,18 180,13.967 180,9 C180,4.033 184.033,0 189,0 Z"
    />
  </svg>;

export default IconGroup;
