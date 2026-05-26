import { useState } from "react";

import {
  Card,
  Typography,
} from "antd";

import { WizardForm } from "../components/forms/WizardForm";
import { WizardSummary } from "../components/forms/WizardSummary";

export default function WizardPage() {
  const [submittedValues, setSubmittedValues] =
    useState(null);

  const handleSubmit = (values) => {
    setSubmittedValues(values);
  };

  const handleReset = () => {
    setSubmittedValues(null);
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Typography.Title level={2}>
          User Form Wizard
        </Typography.Title>

        <Typography.Text type="secondary">
          Form validation and summary flow
        </Typography.Text>
      </div>

      <Card>
        {!submittedValues ? (
          <WizardForm
            onSubmit={handleSubmit}
          />
        ) : (
          <WizardSummary
            values={submittedValues}
            onReset={handleReset}
          />
        )}
      </Card>
    </div>
  );
}