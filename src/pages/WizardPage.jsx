import { useState } from "react";

import {
  Card,
} from "antd";

import { WizardForm } from "../components/forms/WizardForm";
import { WizardSummary } from "../components/forms/WizardSummary";
import {PageHeader} from "../components/ui/PageHeader.jsx";
import {PageContainer} from "../components/ui/PageContainer.jsx";

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
    <PageContainer>
      <PageHeader
        title={'User Form Wizard'}
        description={'Form validation and summary flow'}
      />

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
    </PageContainer>
  );
}