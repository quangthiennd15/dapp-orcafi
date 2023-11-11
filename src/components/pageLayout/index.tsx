import Header from "../header";
import { Form } from "antd";
import React from "react";
import Footer from "../footer";
interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const [form] = Form.useForm();

  return (
    <Form
      className="bg-[#010707] w-full h-full flex flex-col"
      layout="vertical"
      form={form}
      preserve={true}
    >
      <div className="bg-[#010707] w-full h-full flex flex-col">
        <Header />

        <div className="flex-1 w-full max-w-container mx-auto px-4 xl:px-0">
          {children}
        </div>

        <Footer />
      </div>
    </Form>
  );
};

export default PageLayout;
