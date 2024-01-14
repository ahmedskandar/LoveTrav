import UpdatePage from "@/components/update-page/update";
// import UpdateForm from "@/components/update-page/updateForm";
import { getCurrentUser } from "@/services/apiAuth";

const Update = async () => {
  const user = await getCurrentUser();
  //localhost:3000/?error=unauthorized_client&error_code=401&error_description=Email+link+is+invalid+or+has+expired#error=unauthorized_client&error_code=401&error_description=Email+link+is+invalid+or+has+expired
  return (
    <UpdatePage userRole={user?.role || ""} />
  );
};

export default Update;
