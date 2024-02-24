import { Button, Form, Input, Radio } from "antd";
import { FormEvent } from "react";

export default function BetaTesterApplicationCTA() {
  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const myForm = event.target as HTMLFormElement;
    const formData = new FormData(myForm);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        alert("Thank you for your submission");
      } else {
        throw new Error(`Submission failed with status: ${response.status}`);
      }
    } catch (error: unknown) {
      alert((error as Error).message);
    }
  };

  return (
    <Form
      layout="horizontal"
      data-netlify
      name="beta-tester-application"
      method="post"
      onSubmitCapture={handleSubmit}
    >
      <input type="hidden" name="form-name" value="beta-tester-application" />
      <Form.Item label="Radio" required>
        <Radio.Group>
          <Radio name="platform" value="ios">
            iOS
          </Radio>
          <Radio name="platform" value="android">
            Android
          </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Email" required>
        <Input
          name="email"
          type="email"
          placeholder="janja.garnbret@gmail.com"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Apply</Button>
      </Form.Item>
    </Form>
  );
}
