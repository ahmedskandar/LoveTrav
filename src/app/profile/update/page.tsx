import Heading from "@/components/ui/heading";
import Logo from "@/components/ui/logo";
import UpdateContent from "@/components/update-page/updateContent";
import UpdateForm from "@/components/update-page/updateForm";

const Update = () => {
  return (
    <>
      <div className="mx-auto max-w-xl space-y-8 p-10">
        <UpdateContent />
        <UpdateForm />
      </div>
    </>
  );
};

export default Update;
