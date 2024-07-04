// resend.ts
import { Resend } from "resend";

// Assuming 'send' is the correct function to use
const resend = new Resend(process.env.RESEND_API_KEY as string);

export default resend;
