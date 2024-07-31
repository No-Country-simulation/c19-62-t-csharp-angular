function formatFormData(data: Record<string, string>): FormData {
  const formData: FormData = new FormData();
  Object.keys(data).forEach((key) => formData.append(key, data[key]));

  return formData;
}

export default formatFormData;
