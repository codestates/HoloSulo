import axios from "axios";
export default async function naverLoginClickHandler() {
  const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=q4rVdqPg4Nfjz9ZZ89a0&redirect_uri=http://localhost:3000/naver/callback&state=qwe123`;

  window.location.href = url;

  // await axios
  //   .post("http://localhost:8080/naver/callback", {
  //     authorization: code,
  //     state: state,
  //   })
  //   .then(console.log("ok"));
}
