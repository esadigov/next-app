import React from 'react';

import { IVideo } from '../../../../services/data-service/types';
import styles from '../../../../styles/Main.module.scss';

export interface IVideoInfo {
  video: IVideo;
}

export const VideoInfo: React.FC<IVideoInfo> = ({
  video: { embed, text, link },
}) => (
  <div className={styles.videoInfo}>
    <h2>embed {embed}</h2>
    <p>{text}</p>
    <a href={link} target="_blank" rel="noreferrer noopener">
      {link}
    </a>
  </div>
);
