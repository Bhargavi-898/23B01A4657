import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

export function NotificationCard({
  notification,
  viewed,
  onView,
}) {
  return (
    <Card
      elevation={viewed ? 1 : 4}
      onClick={() => onView(notification.ID)}
      sx={{
        cursor: "pointer",
        bgcolor: viewed ? "#f5f5f5" : "#ffffff",
        transition: "0.3s",
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="h6">
            {notification.Type}
          </Typography>

          {!viewed && (
            <Chip
              label="New"
              color="primary"
              size="small"
            />
          )}

          {viewed && (
            <Chip
              label="Viewed"
              color="default"
              size="small"
            />
          )}
        </Stack>

        <Typography
          variant="body1"
          sx={{ mb: 1 }}
        >
          {notification.Message}
        </Typography>

        <Typography
          variant="caption"
          color="text.secondary"
        >
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}