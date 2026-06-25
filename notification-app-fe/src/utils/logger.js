import axios from "axios";

const LOG_URL =
  "http://4.224.186.213/evaluation-service/logs";

export async function Log(
  stack,
  level,
  packageName,
  message
) {
  try {
    const token = import.meta.env.VITE_ACCESS_TOKEN;

    await axios.post(
      LOG_URL,
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
}