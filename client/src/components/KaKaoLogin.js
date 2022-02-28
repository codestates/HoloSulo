export default function kakaoLoginClickHandler() {
  window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=fcff39bfd5d660616c758e244aff8ec3&redirect_uri=${process.env.REACT_APP_OAUTH_KAKAO}&response_type=code`;
}
