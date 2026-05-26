import { Typography } from "antd";

export function PageHeader({
  title,
  description,
}) {
  return (
    <div className="flex flex-col gap-1">
      <Typography.Title level={2}>
        {title}
      </Typography.Title>

      <Typography.Text type="secondary">
        {description}
      </Typography.Text>
    </div>
  );
}