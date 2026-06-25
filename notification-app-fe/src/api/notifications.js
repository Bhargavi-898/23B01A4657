import axios from "axios";
import { Log } from "../utils/logger";

const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

export async function fetchNotifications(page = 1, limit = 10) {
  try {
    await Log(
      "frontend",
      "info",
      "api",
      `Fetching notifications page ${page}`
    );

    const token = import.meta.env.VITE_ACCESS_TOKEN;

    const response = await axios.get(API_URL, {
      params: {
        page,
        limit,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    await Log(
      "frontend",
      "info",
      "api",
      "Notifications fetched successfully"
    );

    return response.data;
  } catch (error) {
    await Log(
      "frontend",
      "error",
      "api",
      error.response?.data?.message ||
        error.message ||
        "Failed to fetch notifications"
    );

    throw new Error(
      error.response?.data?.message ||
        error.message ||
        "Failed to fetch notifications"
    );
  }
}