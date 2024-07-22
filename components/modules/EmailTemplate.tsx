import * as React from "react";

interface EmailTemplateProps {
  name: string;
  userEmail: string;
  body: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  userEmail,
  body,
}) => (
  <div>
    <h1>{name}</h1>
    <h3>{userEmail}</h3>
    <p>{body}</p>
  </div>
);
