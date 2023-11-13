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
      // className="bg-[#010707] w-full h-full flex flex-col"
      layout="vertical"
      form={form}
      preserve={true}
    >
      {/* <div className="bg-[#010707] w-full h-full flex flex-col"> */}
      <div className=" h-screen flex flex-col bg-[#010707]">
        <Header />

        <div className="w-full max-w-container ">{children}</div>

        <Footer />
      </div>
    </Form>
  );
};

export default PageLayout;
