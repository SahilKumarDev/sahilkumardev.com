import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const Contact = () => {
  return (
    <div className="mt-32 px-6">
      <h1>Design Inquiry</h1>
      <p>Got an idea and need design help? Reach out now</p>

      <div>
        <div>
          <Input />
          <Input />
        </div>
        <Textarea />

        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default Contact;
