import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
} from "antd";

import { COUNTRIES } from "../../constants/countries";

export function WizardForm({ onSubmit }) {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onSubmit}
      autoComplete="off"
      validateTrigger='onChange'
      className="max-w-xl"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          { required: true, message: "Please enter your name" },
          {
            pattern: /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s'-]+$/,
            message: "Only letters of the English, Ukrainian, or Russian alphabets are allowed",
          },
          { min: 2, message: "Name must contain at least 2 characters" },
        ]}
        normalize={(value) => {
          if (!value) return value;
          const noDoubleSpaces = value.replace(/\s\s+/g, ' ');
          return noDoubleSpaces.replace(/[^a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s'-]/g, '');
        }}
        validateTrigger="onBlur"
      >
        <Input
          placeholder="Enter your name"
          onBlur={(e) => {
            form.setFieldValue('name', e.target.value.trim());
          }}
        />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please enter your email",
          },
          {
            type: "email",
            message: "Invalid email format",
          },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item
        label="Country"
        name="country"
        rules={[
          {
            required: true,
            message: "Please select a country",
          },
        ]}
      >
        <Select
          placeholder="Select country"
          options={COUNTRIES}
        />
      </Form.Item>

      <Form.Item
        label="Age"
        name="age"
        rules={[
          {
            required: true,
            message: "Please enter your age",
          },
          {
            type: 'integer',
            message: "Age must be a whole number",
          },
        ]}
      >
        <InputNumber
          min={18}
          max={100}
          size="large"
          placeholder="Enter your age"
          style={{ width: '100%' }}
          onKeyDown={(e) => {
            const isControlKey = [
              'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
              'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'
            ].includes(e.key);

            const isCommand = (e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase());

            if (!/[0-9]/.test(e.key) && !isControlKey && !isCommand) {
              e.preventDefault();
            }
          }}
          formatter={(value) => value ? `${value}`.replace(/\D/g, '') : ''}
        />
      </Form.Item>

      <Form.Item
        shouldUpdate
        className="mb-0"
      >
        {
          () => {
            const isTouched = form.isFieldsTouched(true);
            const hasErrors = form.getFieldsError().some(({ errors }) => errors.length > 0);
            const isMissingFields = !form.getFieldValue('name') || !form.getFieldValue('email');

            return (
              <Button
                type="primary"
                htmlType="submit"
                disabled={hasErrors || !isTouched || isMissingFields}
              >
                Submit
              </Button>
            );
          }
        }
      </Form.Item>
    </Form>
  );
}