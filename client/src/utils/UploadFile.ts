import axios, { AxiosResponse } from "axios";

const UploadFile = async (file: File) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");

  try {
    const res: AxiosResponse<{ url: string }> = await axios.post(
      import.meta.env.VITE_UPLOAD_LINK,
      data
    );

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export default UploadFile;
