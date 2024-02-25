import { Button, Form, Input, Radio } from "antd";

function encode(data: any) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
    .join(`&`);
}

export default function BetaTesterApplicationCTA() {
  const formName = `beta-tester-application`;

  const handleSubmit = async (values: any) => {
    try {
      if (values[`bot-field`] === undefined) {
        delete values[`bot-field`];
      }

      const response = await fetch(`/`, {
        method: `POST`,
        headers: { "Content-Type": `application/x-www-form-urlencoded` },
        body: encode({
          "form-name": formName,
          ...values,
        }),
      });
      if (response.ok) showSuccess();
      showError(response);
    } catch (error) {
      showError(error);
    }
  };

  const showSuccess = () => {
    // TODO: Show a success message or navigate to a success page.
    alert(`form submitted successfully`);
  };

  const showError = (error: any) => {
    // TODO: Show an error message to the user
    alert(`There was an error submitting the form`);
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
        <input type="hidden" name="form-name" value={formName} />
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
        <Form.Item label="Radio" required name="platform">
          <Radio.Group>
            <Radio value="ios">iOS</Radio>
            <Radio value="android">Android</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Email" name="email" required>
          <Input type="email" placeholder="janja.garnbret@gmail.com" />
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
