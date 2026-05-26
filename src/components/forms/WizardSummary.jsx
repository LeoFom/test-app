import {
  Button,
  Descriptions,
  Typography,
} from "antd";

export function WizardSummary({
  values,
  onReset,
}) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Typography.Title level={3}>
          Submission Summary
        </Typography.Title>

        <Typography.Text type="secondary">
          Review submitted form data
        </Typography.Text>
      </div>

      <Descriptions
        bordered
        column={1}
        items={[
          {
            key: "name",
            label: "Name",
            children: values.name,
          },
          {
            key: "email",
            label: "Email",
            children: values.email,
          },
          {
            key: "country",
            label: "Country",
            children: values.country,
          },
          {
            key: "age",
            label: "Age",
            children: values.age,
          },
        ]}
      />

      <Button
        type="primary"
        onClick={onReset}
        className="w-fit"
      >
        Start Again
      </Button>
    </div>
  );
}