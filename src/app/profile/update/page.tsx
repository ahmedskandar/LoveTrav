import Heading from "@/components/ui/heading";
import Logo from "@/components/ui/logo";
import UpdateForm from "@/components/update-page/updateForm";

const Update = () => {
  return (
    <>
      <div className="mx-auto max-w-xl space-y-8 p-10">
        <div className="flex justify-center">
          <Logo />
        </div>
        <Heading>Update your password</Heading>
        <UpdateForm />
      </div>
    </>
  );
};

export default Update;
