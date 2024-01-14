"use client";

import UpdateContent from "@/components/update-page/updateContent";
import UpdateForm from "@/components/update-page/updateForm";

// import { params } from "@/lib/constants";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const UpdatePage = ({ userRole }: { userRole: string }) => {
  useEffect(() => {
    //Can't be placed on constants folder otherwise window can't be accessed error
    const params = Object.fromEntries(
      new URLSearchParams(window?.location.hash.substring(1)),
    );
    
    const isAuthenticated = userRole === "authenticated";
    const error = params?.error_description;
    const showToast = (message: string) => {
      toast.error(message);
      redirect("/");
    };

    if (error) return showToast(error.replace(/\+/g, " "));
    if (!isAuthenticated) return showToast("Access denied");
  }, [userRole]);
  return (
    <div className="mx-auto max-w-xl space-y-8 p-10">
      <UpdateContent />
      <UpdateForm />
    </div>
  );
};

export default UpdatePage;
