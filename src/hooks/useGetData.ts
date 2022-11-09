import { useEffect, useState } from 'react';

import { getData } from '../services/data-service';
import { IData } from '../services/data-service/types';

// decided to use one custom hook, but in better implementation for larger app there will be store I think.
// Redux or React.context implementation
const useGetData = () => {
  const [data, setData] = useState<IData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const asyncCall = async () => {
      try {
        const res = await getData();

        setData(res.data);

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    asyncCall();
  }, []);

  return { data, loading };
};

export default useGetData;
