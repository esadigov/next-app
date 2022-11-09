import Image from 'next/image';
import React, { useCallback, useState } from 'react';

import styles from '../../../../styles/Main.module.scss';
import YouTubeIcon from '../../Icons/YouTubeIcon.svg';

export const Video = ({ embed }) => {
  const [showVideo, setShowVideo] = useState(false);

  const onClick = useCallback(() => setShowVideo(true), []);

  return (
    <>
      {showVideo ? (
        <iframe
          title="YouTube video"
          src={`https://www.youtube.com/embed/${embed}`}
          allowFullScreen
          className={styles.video}
        />
      ) : (
        <button type="button" className={styles.videoButton} onClick={onClick}>
          <Image
            src={`https://img.youtube.com/vi/${embed}/maxresdefault.jpg`}
            width={480}
            height={270}
            priority
            alt=""
            className={styles.videoPreview}
          />
          <div className={styles.youtubeButton}>
            <YouTubeIcon />
          </div>
        </button>
      )}
    </>
  );
};
