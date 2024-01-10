export type FormPrompt = {
  to: "login" | "signup";
};

export type Children = {
  children: React.ReactNode;
};

export type ClassName = {
  className?: string;
};

export type Heading = Children & ClassName;

export type SignUpFormState = {
  usernameMessage: string;
  passwordMessage: string;
  confirmPasswordMessage: string;
  emailMessage: string;
  dbMessage: string;
};