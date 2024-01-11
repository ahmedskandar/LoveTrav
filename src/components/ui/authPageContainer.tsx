import { Children } from "@/lib/types";

const AuthPageContainer = ({ children }: Children) => {
  return <div className="flex h-[100svh] flex-col md:flex-row">{children}</div>;
};

export default AuthPageContainer;
