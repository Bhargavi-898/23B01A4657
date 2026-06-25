import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";

export function useNotifications(page = 1, limit = 10) {
  const [notifications, setNotifications] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchNotifications(page, limit);

        const notificationList = data?.notifications || [];

        setNotifications(notificationList);

        const totalCount =
          data?.total ||
          notificationList.length;

        setTotal(totalCount);

        setTotalPages(
          Math.max(1, Math.ceil(totalCount / limit))
        );
      } catch (err) {
        setError(err.message || "Failed to load notifications");
      } finally {
        setLoading(false);
      }
    };

    loadNotifications();
  }, [page, limit]);

  return {
    notifications,
    total,
    totalPages,
    loading,
    error,
  };
}