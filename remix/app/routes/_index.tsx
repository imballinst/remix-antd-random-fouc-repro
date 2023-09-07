import type { V2_MetaFunction } from "@remix-run/node";
import { Button, Form, Input, Typography } from "antd";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* If we enable this, then if we run the thing with `yarn build && yarn start`, it will randomly */}
      {/* show flash of unstyled contents, but it's only missing the Tailwind parts (Ant Design styles still there). */}
      {/* But, if we disable this, then no matter how many times we refresh, then it's always OK. */}

      <Typography.Title level={1}>Hello world</Typography.Title>

      <Typography.Text>Notice the random FOUCs after the load event fires. The FOUCs only apply for the Tailwind styles and not for the Ant styles (because we have inlined the styles already).</Typography.Text>

      <Form>
        <Form.Item>
          <Input />
        </Form.Item>
      </Form>

      <Button>Test button</Button>
{/* 
      <h1>Hello world</h1>

      <p>Notice the random FOUCs after the load event fires. The FOUCs only apply for the Tailwind styles and not for the Ant styles (because we have inlined the styles already).</p>

      <button>Test button</button> */}
    </div>
  );
}
