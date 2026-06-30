import { useState, useEffect } from "react";
import { fetchNotifications } from "../apis/notifications";

export function useNotifications(page,filter) {
  const [notifications, setNotifications] = useState([]);
  const [total, setTotal] = useState(0);
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
     try { setLoading(true),setError(null)
      const data = await fetchNotifications({page,limit: 10,notificationType: filter,});
      setNotifications(data.notifications ?? []);
      setTotal(data.total || 0);
      } 
      catch (err) {setError(err.message);}
      finally {setLoading(false);}
    };


    load();
  }, [page,filter]);

  const totalPages = 0;

  return { notifications, total, totalPages, loading, error };
}
