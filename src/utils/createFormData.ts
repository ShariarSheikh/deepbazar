/* eslint-disable @typescript-eslint/no-explicit-any */
export default function createFormData(
  formData: FormData,
  key: string,
  data: any
): void {
  if (typeof data === 'object' && !Array.isArray(data)) {
    for (const prop in data) {
      if (data.hasOwnProperty(prop)) {
        createFormData(formData, `${key}[${prop}]`, data[prop]);
      }
    }
  } else if (Array.isArray(data)) {
    data.forEach((item, index) => {
      createFormData(formData, `${key}[${index}]`, item);
    });
  } else {
    formData.append(key, data);
  }
}
