import Api from "./api.services";

export default class UserAccessApi {
  static login = (email, password) => {
    return Api.post(`/api/access`, { email, password }).then(
      (data) => data.data
    );
  };
}
