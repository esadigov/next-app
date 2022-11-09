import { ReactElement } from 'react';

import { Loader } from '../../../components/Loader';
import useGetData from '../../../hooks/useGetData';
import Layout from '../../../layouts/Layout';
import styles from '../../../styles/Main.module.scss';
import { UsersTable } from '../components/UsersTable';
import { Video } from '../components/Video';
import { VideoInfo } from '../components/VideoInfo';

const MainPage = () => {
  const { data, loading } = useGetData();

  if (loading) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.videoSection}>
        <VideoInfo video={data?.video} />
        <Video embed={data?.video?.embed} />
      </div>
      <div className={styles.usersSection}>
        <h3>our users</h3>
        <UsersTable users={data?.users} />
      </div>
    </main>
  );
};

MainPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default MainPage;
