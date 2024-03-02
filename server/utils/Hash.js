import bcrypt from "bcrypt";

// encode data
export async function HashData(data) {
  const salt = await bcrypt.genSalt(10);
  const encodedData = await bcrypt.hash(data, salt);
  return encodedData;
}

// check encoded data & data
export async function CompareHashData(data, encodedData) {
  const result = await bcrypt.compare(data, encodedData);
  return result;
}
