// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

import FilePondPluginFileEncode from "filepond-plugin-file-encode";

import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType,
  FilePondPluginFileEncode,
);


const ImageUpload = ({
  name,
  errorMessage,
}: {
  name: string;
  errorMessage: string;
}) => {
  return (
    <div className="cursor-pointer">
      <FilePond
        allowReorder={false}
        acceptedFileTypes={["image/*"]}
        name={name} // Set the field name for the file
        labelFileTypeNotAllowed="Invalid file type. Please upload an image"
        allowMultiple={false}
        labelIdle="Drag & Drop or Browse your desired profile image"
      />
    </div>
  );
};

export default ImageUpload;
