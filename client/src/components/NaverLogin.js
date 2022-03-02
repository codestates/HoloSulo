export default async function naverLoginClickHandler() {
  const min = 1;
  const max = 100000000;
  const random = Math.floor(min + Math.random() * (min + max));
  // const client_id = process.env.NAVER_CLIENT_ID;
  localStorage.setItem("state", random);
  // const url = ;

  window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=q4rVdqPg4Nfjz9ZZ89a0&redirect_uri=${process.env.REACT_APP_API_CALLBACK_URL}&state=${random}`;
}
