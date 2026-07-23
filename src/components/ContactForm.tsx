import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { SendEmail } from "./SendEmail";

const ContactForm = () => {
  return (
      <form className="signal-form"
        action={async (FormData) => {
          "use server";
          await SendEmail(FormData);
        }}
      >
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
            />
          </div><div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="SenderEmail"
              required
              placeholder="Enter your email"
            />
          </div><div>
            <Label htmlFor="message">Your Message</Label>
            <textarea
              placeholder="Your message here..."
              name="message"
              required
              className=""
            ></textarea>
          </div><button type="submit" className="signal-submit">TRANSMIT MESSAGE <span>↗</span></button>
      </form>
  );
};

export default ContactForm;
