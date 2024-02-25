import { Button, Form, Input, Radio } from "antd";

function encode(data: any) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
    .join(`&`);
}

export default function BetaTesterApplicationCTA() {
  const formName = `beta-tester-application`;

  const handleSubmit = (values: any) => {
    if (values[`bot-field`] === undefined) {
      delete values[`bot-field`];
    }

    fetch(`/`, {
      method: `POST`,
      headers: { "Content-Type": `application/x-www-form-urlencoded` },
      body: encode({
        "form-name": formName,
        ...values,
      }),
    })
      .then(() => showSuccess())
      .catch((error) => showError(error));
  };

  const showSuccess = () => {
    // TODO: Show a success message or navigate to a success page.
    console.log(`form submitted successfully`);
  };

  const showError = (error: any) => {
    // TODO: Show an error message to the user
    console.log(`There was an error submitting the form`);
    console.log(error);
  };

  return (
    <>
      <form
        name={formName}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
      >
        <input type="radio" name="platform" />
        <input type="email" name="email" />
      </form>
      <Form
        layout="horizontal"
        data-netlify
        name="cf"
        method="post"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Don't fill this out"
          className={`hidden`}
          style={{ display: `none` }}
          name="bot-field"
        >
          <Input type={`hidden`} />
        </Form.Item>
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
          <Button type="primary" htmlType="submit">
            Apply
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
