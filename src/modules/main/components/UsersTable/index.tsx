import Image from 'next/image';
import React from 'react';

import appConfig from '../../../../config/app.config';
import { IUser } from '../../../../services/data-service/types';
import styles from '../../../../styles/Main.module.scss';
import ChatIcon from '../../Icons/ChatIcon.svg';

interface IUsersTable {
  users: IUser[];
}

export const UsersTable: React.FC<IUsersTable> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.name}>
          <div className={styles.table}>
            <div className={styles.profile}>
              <div className={styles.profileImage}>
                <Image
                  src={`${appConfig.apiUrl}${user.photo}`}
                  alt=""
                  loading="lazy"
                  fill
                />
              </div>
            </div>
            <div className={styles.status}>
              {user.online ? 'online' : 'offline'}
            </div>
            <div className={styles.chatArea}>
              <button
                className={
                  user.online
                    ? styles.chat
                    : `${styles.chat} ${styles.chatDisabled}`
                }
              >
                Chat
              </button>
              <div className={styles.chatIcon}>
                <ChatIcon />
              </div>
            </div>
            <div className={styles.age}>{user.age} year</div>
            <div className={styles.name}>{user.name}</div>
            <div className={styles.location}>{user.registration}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
